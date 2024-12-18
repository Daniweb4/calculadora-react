import { useState } from 'react'

const Calculator = () => {
    const[result, setResult]=useState('')
    const handleRes=(e) =>{
        setResult(result.concat(e.target.name))
     }
     //Cremos la parte logica para limpiar la calculadora
     const clean=()=>{
      setResult('')
     }
     //creamos la parte logica para quitar espacios
     const quiterEspacios=()=>{
      setResult(result.slice(0,-1))
     }
     //creamos la vaeiable para realizar las operciones
    const Calcular = () =>{
      try{
        setResult(eval(result.replace(/\^/g, '**')).toString())
        console.log(eval(result))
      }catch(error){
        setResult('Error')
      }
    }
    const raizCuadrada=()=>{
      setResult(Math.sqrt(eval(result)))
    }
  
  

 
  return (
    <div className='content'>
      <form action=""><input type="text" value={result} readOnly /></form>
      <div className='teclado'>
        {/**botones de operdores */}
      <button className='clear' onClick={clean}>Clean</button>
      <button className='delete' onClick={quiterEspacios}>C</button>
      <button className='operadores' name='+' onClick={handleRes}>+</button>
      <button className='operadores' name='-' onClick={handleRes}>&ndash;</button>
      <button className='operadores' name='*' onClick={handleRes}>&times;</button>
      <button className='operadores' name='/' onClick={handleRes}>&divide;</button>
      <button className='operadores' onClick={raizCuadrada}>&radic;</button>
      <button className='operadores'  name='^' onClick={handleRes}>^</button>
      <button className='operadores' name='.' onClick={handleRes}>.</button>
      
      {/**Botones de numeros */}
      <button className='btn' name='1' onClick={handleRes}>1</button>
      <button className='btn' name='2' onClick={handleRes}>2</button>
      <button className='btn' name='3' onClick={handleRes}>3</button>
      <button className='btn' name='4' onClick={handleRes}>4</button>
      <button className='btn' name='5' onClick={handleRes}>5</button>
      <button className='btn' name='6' onClick={handleRes}>6</button>
      <button className='btn' name='7' onClick={handleRes}>7</button>
      <button className='btn' name='8' onClick={handleRes}>8</button>
      <button className='btn' name='9' onClick={handleRes}>9</button>
      <button className='btn' name='0' onClick={handleRes}>0</button>
   
      <button className='operadores' onClick={Calcular}>=</button>
    </div>
</div>
  )
}

export default Calculator
