import React, { Component, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import urheilijatContext from "../context/UrheilijatContext";
import { useParams } from "react-router-dom";

const MuokkaaUrheilijatieto = () => {
  let history = useNavigate();
  const { id } = useParams();

  const [Nimet, setNimet] = useState("");
  const [Syntymavuosi, setSyntymavuosi] = useState("");
  const [Paino, setPaino] = useState("");
  const [LinkkiKuvaan, setLinkkiKuvaan] = useState("");
  const [Laji, setLaji] = useState("");
  const [Saavutukset, setSaavutukset] = useState("");
  const UrheilijatContext = useContext(urheilijatContext); //hooks

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3000/posts/${id}`)
        .then((res) => {
          const urheilijatiedot = res.data.post;
          if (urheilijatiedot) {
            setNimet(urheilijatiedot.Nimet || "");
            const birthdate = urheilijatiedot.Syntymavuosi;
            setSyntymavuosi(birthdate.substring(0, 10) || "");
            setPaino(urheilijatiedot.Paino || "");
            setLinkkiKuvaan(urheilijatiedot.LinkkiKuvaan || "");
            setLaji(urheilijatiedot.Laji || "");
            setSaavutukset(urheilijatiedot.Saavutukset || "");
          }
        })
        .catch((error) => {
          console.error("Error fetching urheilijatiedot:", error);
        });
    }
  }, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const paivitettyUrheilijatieto = {
      Nimet: Nimet,
      Syntymavuosi: Syntymavuosi,
      Paino: Paino,
      LinkkiKuvaan: LinkkiKuvaan,
      Laji: Laji,
      Saavutukset: Saavutukset,
    };
    UrheilijatContext.setUrheilijatieto(id, paivitettyUrheilijatieto);
    history("/");
  };
  const onChangeNimet = (e) => {
    setNimet(e.target.value);
  };
  const onChangeSyntymavuosi = (e) => {
    setSyntymavuosi(e.target.value);
  };
  const onChangePaino = (e) => {
    setPaino(e.target.value);
  };
  const onChangeLinkkiKuvaan = (e) => {
    setLinkkiKuvaan(e.target.value);
  };
  const onChangeLaji = (e) => {
    setLaji(e.target.value);
  };
  const onChangeSaavutukset = (e) => {
    setSaavutukset(e.target.value);
  };
  return (
    <div className="card mb-3">
      <div className="card-header">Muokkaa urheilijatietoa</div>
      <div className="card-body">
        <form onSubmit={handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="Nimet">Nimet</label>
            <input
              type="text"
              name="Nimet"
              className="form-control form-control-lg"
              placeholder="Syötä nimet..."
              value={Nimet}
              onChange={onChangeNimet}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Syntymavuosi">Syntymävuosi</label>
            <input
              type="text"
              name="Syntymavuosi"
              className="form-control form-control-lg"
              placeholder="Syötä syntymävuosi..."
              value={Syntymavuosi}
              onChange={onChangeSyntymavuosi}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Paino">Paino</label>
            <input
              type="text"
              name="Paino"
              className="form-control form-control-lg"
              placeholder="Syötä paino..."
              value={Paino}
              onChange={onChangePaino}
            />
          </div>
          <div className="form-group">
            <label htmlFor="LinkkiKuvaan">Linkki kuvaan</label>
            <input
              type="text"
              name="LinkkiKuvaan"
              className="form-control form-control-lg"
              placeholder="Syötä linkki kuvaan..."
              value={LinkkiKuvaan}
              onChange={onChangeLinkkiKuvaan}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Laji">Laji</label>
            <input
              type="text"
              name="Laji"
              className="form-control form-control-lg"
              placeholder="Syötä laji..."
              value={Laji}
              onChange={onChangeLaji}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Saavutukset">Saavutukset</label>
            <input
              type="text"
              name="Saavutukset"
              className="form-control form-control-lg"
              placeholder="Syötä saavutukset..."
              value={Saavutukset}
              onChange={onChangeSaavutukset}
            />
          </div>
          <input
            type="submit"
            value="Muokkaa urheilijatieto"
            className="btn btn-light btn-block"
          />
        </form>
      </div>
    </div>
  );
};
export default MuokkaaUrheilijatieto;
