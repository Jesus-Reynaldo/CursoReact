import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/Contacto.class';


const ComponenteB = ({contacto}) => {
  return (
    <div className="col-ms-4">
      <h2>Nombre: {contacto.nombre}</h2>
      <h2>Apellidos: {contacto.apellido}</h2>
      <h3>Email: {contacto.email}</h3>
      <h4>Contacto: {contacto.conectado ? 'En Línea':'No Disponible'}</h4>
    </div>
  );
};


ComponenteB.propTypes = {
  contacto: PropTypes.instanceOf(Contacto)
};


export default ComponenteB;
