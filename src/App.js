import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Usuarios from "./components/usuarios";
const App = () => (
  <BrowserRouter>
    <Menu />
    <Route exact path="/" component={Usuarios} />
  </BrowserRouter>
);

export default App;
