import React, { useState } from 'react'

const Input = () => {
    const [name, setName] = useState('')

    const inputHandler = (e) => {
        setName(e.target.value)
    }

    const inputDown = (e) => {
        setName(e.key)
        if('aeiou'.includes(e.key.value)){
            e.preventDefault();
            console.log('no vocales')
        }
    }


  return (
    <div>
        <h1>Input comun</h1>
        <input name='nombre' type='text' placeholder='ingrese tu nombre' onChange={inputHandler}/>
        <p>Ingresa tu nombre:{name}</p>
    <h2>Input sin vocal</h2>
        <input name='sinvocal' type='text' placeholder='novocal' onKeyDown={inputDown}/>
    </div>
  )
}

export default Input