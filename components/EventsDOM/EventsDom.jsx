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
    const handleSubmit = () => {
        e.preventDefault()
        console.log('Submit')
    }
    
    return (

        <>
            <h4 className="mt-5">Events</h4>
            <form action="/otraurl.com" method="POST" onSubmit={handleSubmit}>
                <button type="button" className=" m-2 btn btn-danger" onClick = {handleClick}>Click me!</button>
                <button type="button" className=" m-2 btn btn-dark" onMouseOver = {handleHover}>Hover me!</button>
                <button type="button" className=" m-2 btn btn-success " onFocus = {handleFocus}>Focus me!</button>
                <button className="btn btn-primary">Submit!</button>
            </form>
        </>

    )
}

export default CallAction