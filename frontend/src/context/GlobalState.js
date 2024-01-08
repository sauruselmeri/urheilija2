import React, { useReducer } from "react";
import AppReducer from "./AppReducer";
import UrheilijatContext from "./UrheilijatContext";
import { GET_URHEILIJATIEDOT } from "./types";
import axios from "axios";

const GlobalState = (props) => {
  //initial state
  let initialState = {
    urheilijatiedot: [],
  };
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const getUrheilijatiedot = async () => {
    try {
      let res = await axios.get("http://localhost:3000/posts");
      let { data } = res;
      dispatch({ type: GET_URHEILIJATIEDOT, payload: data.posts }); //muutos .posts osio
    } catch (error) {
      console.error(error);
    }
  };
  const getUrheilijatieto = async (id) => {
    console.log("NISPEEEEE");
    try {
      let sql = "http://localhost:3000/posts/" + id;
      let res = await axios.get(sql);
      console.log("GET_URHEILIJATIETO:");
      dispatch({ type: "GET_URHEILIJATIETO", payload: res.data.posts });
      ///return res.data;
    } catch (error) {
      console.error(error);
    }
  };
  const setUrheilijatiedot = async (uusiUrheilijatieto) => {
    try {
      const res = await axios
        .post(`http://localhost:3000/posts/lisaa`, uusiUrheilijatieto)
        .then((res) => {
          dispatch({ type: "ADD_URHEILIJATIETO", payload: res.data.posts });
          console.log(res.data);
        });
    } catch (error) {
      console.error(error);
    }
  };
  const setUrheilijatieto = async (id, paivitettyUrheilijatieto) => {
    try {
      const res = await axios
        .put(
          `http://localhost:3000/posts/muokkaa/${id}`,
          paivitettyUrheilijatieto
        )
        .then((res) => {
          dispatch({ type: "EDIT_URHEILIJATIETO", payload: res.data.posts });
          console.log(res.data);
        });
    } catch (error) {
      console.error(error);
    }
  };
  const poistaUrheilijatieto = async (id) => {
    try {
      //alert(id);
      //console.log("poistetaan");
      let sql = `http://localhost:3000/posts/${id["id"]}`;
      console.log(sql);
      const res = await axios.delete(sql);
      dispatch({ type: "DELETE_URHEILIJATIETO", payload: id });
      console.log(res.data.posts);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <UrheilijatContext.Provider
      value={{
        urheilijatiedot: state.urheilijatiedot,
        getUrheilijatiedot,
        setUrheilijatieto,
        setUrheilijatiedot,
        poistaUrheilijatieto,
        getUrheilijatieto,
      }}
    >
      {props.children}
    </UrheilijatContext.Provider>
  );
};
//};
export default GlobalState;
