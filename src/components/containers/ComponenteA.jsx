import React from 'react';
import PropTypes from 'prop-types';
import ComponenteB from '../pure/ComponenteB';
import { Contacto } from '../../models/Contacto.class';


const ComponenteA = () => {
  const defaultContacto = new Contacto('Jesus','Reynaldo','jesus@fms.bo',false);
  return (
    <div className="container d-flex">
      <div className="row">
        <h1>Contacto</h1>
      </div>
      <div className="row">
        <ComponenteB contacto={defaultContacto} />
      </div>
    </div>
  );
};


ComponenteA.propTypes = {

};


export default ComponenteA;
