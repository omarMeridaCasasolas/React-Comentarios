import React from 'react';
import '../hoja-de-estilos/Testimonio.css'

function Testimonio(props) {
    return(
        <div className='contenedor-testimonio'>
            <img className='imagen-contenedor' src={require(`../imagenes/testimonio-${props.imagen}.png`)} alt="Imagen de usuario" />
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'> <strong>{props.nombre}</strong> in {props.pais}</p>
                <p className='cargo-testimonio'>{props.cargo} at <strong>{props.empresa}</strong></p>
                <p className='texto-testimonio'>{props.testimonio}</p>
            </div>
        </div>
    );
}

//exportaciones nombradas y por defecto JS como por debajo
export default Testimonio;