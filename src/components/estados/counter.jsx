import React, { useState } from 'react'



const CounterApp = () => {

    let [counter, setCounter] = useState(0) // [ variable, función ]
    
    const handleIncrement = () =>  {
        
        setCounter( counter + 1 )// solo actualiza una vez
        setCounter( counter + 1 )
        setCounter(prevState => prevState + 1) //cuando se pasa una función se actualiza varias veces
        setCounter((prevState) => {
            return prevState + 1
        })
    }
    return (
        <>
            <div>
                <button onClick={handleIncrement}>Incrementar</button>
                <h1>Clicks: {counter}</h1>
            </div>
        </>
    )

}

export default CounterApp