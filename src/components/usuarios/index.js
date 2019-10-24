import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

class Usuarios extends Component {
  //   async componentDidMount() {
  //     const respuesta = await axios.get(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     this.setState({
  //       usuarios: respuesta.data
  //     });
  //   }
  ponerfilas = () =>
    this.props.usuarios.map(usr => (
      <tr key={usr.id}>
        <td>{usr.name}</td>
        <td>{usr.email}</td>
        <td>{usr.website}</td>
      </tr>
    ));
  render() {
    console.log(this.props);

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
  }
}
const mapStateToProps = reducers => {
  return reducers.usuariosreducer;
};

export default connect(
  mapStateToProps,
  {
    /*KMC*/
  }
)(Usuarios);
