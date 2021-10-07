//se importa lo necesario
import React from 'react';
import  ReactDOM  from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import { CounterApp } from './CounterApp';
import './index.css';

//llamamos a donde va a ir nuestro componente
const divRoot = document.querySelector('#app')
//mostramos nuestro saludo
//ReactDOM.render(<PrimeraApp saludo='hello World'/>, divRoot);
let number = 8;
ReactDOM.render(<CounterApp value={number}/>, divRoot) 