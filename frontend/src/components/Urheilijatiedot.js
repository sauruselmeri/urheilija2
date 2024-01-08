import React, { Component, useContext, useEffect } from "react";
import Urheilijatieto from "./Urheilijatieto";
import urheilijatContext from "../context/UrheilijatContext";

const Urheilijatiedot = () => {
  const UrheilijatContext = useContext(urheilijatContext); //hooks
  useEffect(() => {
    UrheilijatContext.getUrheilijatiedot();
  }, []);
  return (
    <>
      <h1 className="display-4 mb-2">
        <span className="text-info">URHEILIJATIEDOT</span>
      </h1>
      <React.Fragment>
        {UrheilijatContext.urheilijatiedot.length
          ? UrheilijatContext.urheilijatiedot.map((urheilijatieto) => (
              <Urheilijatieto
                key={urheilijatieto && urheilijatieto.id}
                urheilijatieto={urheilijatieto}
              />
            ))
          : null}
      </React.Fragment>
    </>
  );
};
export default Urheilijatiedot;
