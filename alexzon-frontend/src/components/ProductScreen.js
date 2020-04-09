import React, { useEffect, useState } from 'react';
// import data from '../data'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {detailsProduct} from '../actions/productActions'

function ProductScreen(props){
    // console.log(props.match.params.id)
    // const product = data.products.find(x => x._id === props.match.params.id)
    // console.log(product)
    const [qty, setQty] = useState(1)
    const productDetails = useSelector(state => state.productDetails)
    const {product,loading, error} = productDetails
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id))
        return () => {
            
        }
    }, [])
    const handleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "qty=" + qty)
    }
    return(
        <div>
            <div className="back-to-result">
            <Link to="/">Back to result</Link>
            </div>
                {/* <h1>{product.name}</h1> */}
                {loading? <div>Loading...</div>: 
                error? <div>{error}</div>:(
            <div className="details">
                <div className="details-image">
                    {product.image}
                </div>
                <div className="details-info">
                    <ul>
                        <li><h4>{product.name}</h4></li>
                        <li>Id: {product._id}</li>
                        <li>Price: ${product.price}</li>
                        
                        <li>Description:
                            <div>
                                {product.description}
                            </div>
                        </li>
                        <li>{product.rating} Stars</li>
                    </ul>
                </div>
                <div className="details-action">
                    <ul>
                        <li>
                            Price: {product.price}
                        </li>
                        <li>
                            Status: {product.countInStock > 0? "In Stock": "Unavailable."}
                        </li>
                        <li>
                            Qty: <select value={qty} onChange={(e) => {setQty(e.target.value)}}>
                                {[...Array(product.countInStock).keys()].map(x=>
                                    <option value={x+1}>{x+1}</option>
                                )}
                                </select>
                        </li>
                        <li>
                            {product.countInStock > 0 && <button onClick={handleAddToCart} className="button">Add to Cart</button>}
                            
                        </li>
                    </ul>
                </div>
            </div>)}
        </div>
    )
}
export default ProductScreen;
