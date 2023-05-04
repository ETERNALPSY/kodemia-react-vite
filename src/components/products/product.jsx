import './product.css'

const ProductItem = (props) => {
    const { name, precio, cantidad } = props.data
    return (
        <>
            <li className="list-group-item d-flex justify-content-between align-items-start list__item" >
                <div className="ms-2 me-auto">
                    <p className="fw-bold d-flex">{name}</p>
                    <p className="d-flex">precio ${precio}mxn</p> 
                </div>
                <span className="badge bg-primary rounded-pill">{cantidad}</span>
            </li>

        </>
    )
}

export default ProductItem