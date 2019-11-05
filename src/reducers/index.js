import { combineReducers } from "redux";
import usuariosreducer from "./usuariosreducer";
import publicacionesreducer from "./publicacionesreducer";

export default combineReducers({
  usuariosreducer,
  publicacionesreducer
});
