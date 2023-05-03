const CallAction = () => {
    const handleClick = () => {
        console.log('click en el botón')
    }
    const handleHover = () => {
        console.log('Hover en el botón')
    }
    const handleFocus = () => {
        console.log('Hover en el botón')
    }
    
    return (

        <>
            <button onClick = {handleClick}>Click me!</button>
            <button onMouseOver = {handleClick}>Click me!</button>
            <button onFocus = {handleClick}>Click me!</button>
        </>

    )
}