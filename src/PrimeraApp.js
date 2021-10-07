import React from 'react'
import PropTypes from 'prop-types'

//functionalComponents
const PrimeraApp = ({saludo, subtitulo }) =>{
    
    // {
    //     nombre: 'luciano',
    //     edad: 20
    // } 
    return(
        <>
            <h1> { saludo } </h1>
                {/* <pre>{JSON.stringify(saludo ,null, 3)}</pre>  */}
            <p> {subtitulo}</p>
            <h3>Hello</h3>
        </>
    );
}
PrimeraApp.protoTypes ={
    saludo: PropTypes.string.isRequired,
}
PrimeraApp.defaultProps ={
    subtitulo: 'soy un subtitulo',

}


export default PrimeraApp;