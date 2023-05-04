import React, { useState } from 'react'

const ConditionalApp = () => {

    const [condition, setCondition] = useState(true)

    const toggleCondition = () => {
        setCondition(!condition)
    }

    return (
        <div>
            <button onClick={toggleCondition} >Toggle</button>
            {
                condition && <h3>Show  message</h3>
            }

            <p>Estado actual : {condition.toString()} </p>

        </div>
    )
}

export default ConditionalApp