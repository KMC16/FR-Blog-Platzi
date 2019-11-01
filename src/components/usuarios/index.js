import React, { Component } from "react";
import { connect } from "react-redux";
import * as usuariosActions from "../../actions/usuariosactions";
import Loading from "../../image/Loading.gif";

import "../../index.css";
class Usuarios extends Component {
  componentDidMount() {
    this.props.traer();
  }

  ponerContenido = () => {
    if (this.props.cargando) {
      return (
        <div className="Loading__container">
          <div className="Loading__content">
            <img src={Loading} alt="" />
          </div>
        </div>
      );
    }
    return (
      <div className="margen">
        <table className="tabla">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Enlace</th>
            </tr>
          </thead>
          <tbody>{this.ponerfilas()}</tbody>
        </table>
      </div>
    );
  };
  ponerfilas = () =>
    this.props.usuarios.map(usr => (
      <tr key={usr.id}>
        <td>{usr.name}</td>
        <td>{usr.email}</td>
        <td>{usr.website}</td>
      </tr>
    ));
  render() {
    return <div>{this.ponerContenido()}</div>;
  }
}
const mapStateToProps = reducers => {
  return reducers.usuariosreducer;
};

export default connect(
  mapStateToProps,
  usuariosActions
)(Usuarios);
