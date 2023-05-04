const CallAction = () => {
    const handleClick = () => {
        console.log('click en el botón')
    }
    const handleHover = () => {
        console.log('Hover en el botón')
    }
    const handleFocus = () => {
        console.log('Focus en el botón')
    }
    
    return (

        <>
        <h4 className="mt-5">Events</h4>
            <button className=" m-2 btn btn-danger" onClick = {handleClick}>Click me!</button>
            <button className=" m-2 btn btn-dark" onMouseOver = {handleHover}>Hover me!</button>
            <button className=" m-2 btn btn-success " onFocus = {handleFocus}>Focus me!</button>
        </>

    )
}

export default CallAction