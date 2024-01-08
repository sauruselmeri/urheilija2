import React, { Component } from "react";
import { useState, useReducer, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import urheilijatContext from "../context/UrheilijatContext";

const LisaaUrheilijatieto = () => {
  let history = useNavigate();
  const [Nimet, setNimet] = useState("");
  const [Syntymavuosi, setSyntymavuosi] = useState("");
  const [Paino, setPaino] = useState("");
  const [LinkkiKuvaan, setLinkkiKuvaan] = useState("");
  const [Laji, setLaji] = useState("");
  const [Saavutukset, setSaavutukset] = useState("");
  //const [puhelin, setPuhelin] = useState("");
  const [virheet, setVirheet] = useState({});
  const UrheilijatContext = useContext(urheilijatContext); //hooks
  const handleSubmit = async (e) => {
    e.preventDefault();
    const uusiUrheilijatieto = {
      Nimet: Nimet,
      Syntymavuosi: Syntymavuosi,
      Paino: Paino,
      LinkkiKuvaan: LinkkiKuvaan,
      Laji: Laji,
      Saavutukset: Saavutukset,
      //puhelin: puhelin,
    };
    console.log(uusiUrheilijatieto);
    UrheilijatContext.setUrheilijatiedot(uusiUrheilijatieto);
    history("/");
  };
  const tallennaTieto = (e) =>
    this.setState({ [e.target.name]: e.target.value });
  return (
    <div className="card mb-3">
      <div className="card-header">Lisää urheilijatieto</div>
      <div className="card-body">
        <form onSubmit={handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="Nimet">Nimet</label>
            <input
              id="Nimet"
              type="text"
              name="Nimet"
              className="form-control form-control-lg"
              placeholder="Syötä nimet..."
              value={Nimet}
              onChange={(event) => setNimet(event.target.value)}
              error={virheet.Nimet}
            />
            <div className="invalid-feedback">Täytä nimet</div>
          </div>
          <div className="form-group">
            <label htmlFor="Syntymavuosi">Syntymävuosi</label>
            <input
              id="Syntymavuosi"
              type="text"
              name="Syntymavuosi"
              className="form-control form-control-lg"
              placeholder="Syötä syntymävuosi..."
              value={Syntymavuosi}
              onChange={(event) => setSyntymavuosi(event.target.value)}
              error={virheet.Syntymavuosi}
            />
            <div className="invalid-feedback">Täytä syntymävuosi</div>
          </div>
          <div className="form-group">
            <label htmlFor="Paino">Paino</label>
            <input
              id="Paino"
              type="text"
              name="Paino"
              className="form-control form-control-lg"
              placeholder="Syötä paino..."
              value={Paino}
              onChange={(event) => setPaino(event.target.value)}
              error={virheet.Paino}
            />
            <div className="invalid-feedback">Täytä paino</div>
          </div>
          <div className="form-group">
            <label htmlFor="LinkkiKuvaan">Linkki kuvaan</label>
            <input
              id="LinkkiKuvaan"
              type="text"
              name="LinkkiKuvaan"
              className="form-control form-control-lg"
              placeholder="Syötä linkki kuvaan..."
              value={LinkkiKuvaan}
              onChange={(event) => setLinkkiKuvaan(event.target.value)}
              error={virheet.LinkkiKuvaan}
            />
            <div className="invalid-feedback">Täytä linkki kuvaan</div>
          </div>
          <div className="form-group">
            <label htmlFor="Laji">Laji</label>
            <input
              id="Laji"
              type="text"
              name="Laji"
              className="form-control form-control-lg"
              placeholder="Syötä laji..."
              value={Laji}
              onChange={(event) => setLaji(event.target.value)}
              error={virheet.Laji}
            />
            <div className="invalid-feedback">Täytä laji</div>
          </div>
          <div className="form-group">
            <label htmlFor="Saavutukset">Saavutukset</label>
            <input
              id="Saavutukset"
              type="text"
              name="Saavutukset"
              className="form-control form-control-lg"
              placeholder="Syötä saavutukset..."
              value={Saavutukset}
              onChange={(event) => setSaavutukset(event.target.value)}
              error={virheet.Saavutukset}
            />
            <div className="invalid-feedback">Täytä saavutukset</div>
          </div>
          <input
            type="submit"
            value="Lisää urheilijatieto"
            className="btn btn-light btn-block"
          />
        </form>
      </div>
    </div>
  );
};
/*LisaaPuhelintieto.propTypes = {
 virhe: PropTypes.string,
};*/
export default LisaaUrheilijatieto;
