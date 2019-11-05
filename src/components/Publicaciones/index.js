import React from "react";
import { connect } from "react-redux";
// import reducers from "../../reducers";
import * as usuariosActions from "../../actions/usuariosactions";
import * as publicacionesActions from "../../actions/publicacionesactions";

const { traer: usuariosTraer } = usuariosActions;
const { traer: publicacionesTraer } = publicacionesActions;

class Publicaciones extends React.Component {
  componentDidMount() {
    if (!this.props.usuariosreducer.usuarios.length) {
      this.props.usuariosTraer();
    }
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Publicaciones de </h1>
        {this.props.match.params.key}
      </div>
    );
  }
}

const mapStateToProps = ({ usuariosreducer, publicacionesreducer }) => {
  return {
    usuariosreducer,
    publicacionesreducer
  };
};

const mapDispatchToProps = {
  usuariosTraer,
  publicacionesTraer
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Publicaciones);
