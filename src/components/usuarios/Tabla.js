import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../css/iconos.css";
const Tabla = props => {
  const ponerfilas = () =>
    props.usuarios.map((usr, key) => (
      <tr key={usr.id}>
        <td>{usr.name}</td>
        <td>{usr.email}</td>
        <td>{usr.website}</td>
        <Link to={`/publicaciones/${key}`}>
          <div className="eye-solid icon"></div>
        </Link>
      </tr>
    ));
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
        <tbody>{ponerfilas()}</tbody>
      </table>
    </div>
  );
};

const mapStateToProps = reducers => {
  return reducers.usuariosreducer;
};
export default connect(mapStateToProps)(Tabla);
