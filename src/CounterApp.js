
import PropTypes from 'prop-types'
import React, { useState } from 'react'



export const CounterApp = ({value})=>{
    
    const [counter, setCounter] = useState(value)

        //handleAdd 
         const handleAdd = () => setCounter((c)=> c +1)
         const   handleSubstract = () => setCounter((c)=> c -1)
         const  handleReset = () => setCounter((c)=> value) 
    return( 
        <>
        <h1>CounterApp</h1>
        <p>{counter}</p>
        <button 
        onClick= {handleAdd} >+1</button>
        <button 
        onClick= {handleReset} >Reset</button>
        <button 
        onClick= {handleSubstract} >-1</button>
        </>
);} 

CounterApp.propTypes ={
    value: PropTypes.number.isRequired
}