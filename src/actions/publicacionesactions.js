import { TRAER_TODOS, CARGANDO, ERROR } from "../types/publicacionesTypes";

import axios from "axios";
export const traer = () => async dispatch => {
  dispatch({
    type: CARGANDO
  });
  try {
    const respuesta = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch({
      type: TRAER_TODOS,
      playload: respuesta.data
    });
  } catch (error) {
    console.log("Error:", error.message);
    dispatch({
      type: ERROR,
      payload: "Algo salio mal intente mas tarde."
    });
  }
};
