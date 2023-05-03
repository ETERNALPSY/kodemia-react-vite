import ProductItem from "./product"
import './listProducts.css'

const ListProducts = (props) => {

    const products = props.products

    return (

        <>
            <h4>Products List</h4>
            <ol className="list-group list-group-numbered list__container">
                {
                    products.map((product) => {
                        return (
                            <ProductItem
                                data={product}
                                key={product.id}
                            />
                        )
                    })
                }
            </ol>
        </>

    )
}

export default ListProducts