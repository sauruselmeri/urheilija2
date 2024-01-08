import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import urheilijatContext from "../context/UrheilijatContext";
import { Table, Form, Button } from "react-bootstrap";

const Urheilijatieto = (props) => {
  const UrheilijatContext = useContext(urheilijatContext); //hooks
  let history = useNavigate();
  const [naytaUrheilijatieto, setnaytaUrheilijatieto] = useState(false);
  const onDeleteClick = (id) => {
    UrheilijatContext.poistaUrheilijatieto(id);
    window.location.reload();
    history("/");
  };
  const onShowClick = (e) => {
    let lippu = !naytaUrheilijatieto;
    setnaytaUrheilijatieto(lippu);
  };
  const { id, Nimet, Syntymavuosi, Paino, LinkkiKuvaan, Laji, Saavutukset } =
    props.urheilijatieto;
  return (
    <div className="card card-body mb-3">
      <h4>
        {Nimet} <br />
        <Button
          className="text-info"
          variant="secondary"
          onClick={onShowClick.bind(this)}
        >
          Tiedot
        </Button>
        <Button
          className="text-info"
          variant="secondary"
          onClick={onDeleteClick.bind(this, { id })}
        >
          Poista
        </Button>
        <Link to={`urheilijatieto/muokkaa/${id}`}>
          <Button className="text-info" variant="secondary">
            Muokkaa
          </Button>
        </Link>
      </h4>
      {naytaUrheilijatieto ? (
        <ul className="list-group">
          <li className="list-group-item">Nimet: {Nimet}</li>
          <li className="list-group-item">
            Syntymavuosi: {Syntymavuosi.substring(0, 10)}
          </li>
          <li className="list-group-item">Paino: {Paino}</li>
          <li className="list-group-item">LinkkiKuvaan: {LinkkiKuvaan}</li>
          <li className="list-group-item">Laji: {Laji}</li>
          <li className="list-group-item">Saavutukset: {Saavutukset}</li>
        </ul>
      ) : null}
    </div>
  );
};
/*Puhelintieto.propTypes = {
 yhteystieto: PropTypes.object.isRequired,
 //deleteClickHandler: PropTypes.func.isRequired,//ei tarvita enää
};*/
export default Urheilijatieto;
