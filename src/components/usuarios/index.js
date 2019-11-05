import React, { Component } from "react";
import { connect } from "react-redux";
import * as usuariosActions from "../../actions/usuariosactions";
import Loading from "../../image/Loading.gif";
import Error from "../../components/Error";
import Tabla from "../../components/usuarios/Tabla";

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
    if (this.props.error) {
      return <Error mensaje={this.props.error} />;
    }
    return <Tabla />;
  };

  render() {
    return (
      <div>
        <h2>Usuarios</h2>
        {this.ponerContenido()}
      </div>
    );
  }
}
const mapStateToProps = reducers => {
  return reducers.usuariosreducer;
};

export default connect(
  mapStateToProps,
  usuariosActions
)(Usuarios);
