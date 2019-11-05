import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Usuarios from "./components/usuarios";
import Publicaciones from "../src/components/Publicaciones/index";
const App = () => (
  <BrowserRouter>
    <Menu />
    <Route exact path="/" component={Usuarios} />
    <Route exact path="/publicaciones/:key" component={Publicaciones} />
  </BrowserRouter>
);

export default App;
