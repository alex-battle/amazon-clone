import React from 'react';
import data from '../data'
import {Link} from 'react-router-dom'

function ProductScreen(props){
    console.log(props.match.params.id)
    const product = data.products.find(x => x._id === props.match.params.id)
    console.log(product)
    return(
        <div>
            <div className="back-to-result">
            <Link to="/">Back to result</Link>
            </div>
                <h1>{product.name}</h1>
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
                            Status: {product.status}
                        </li>
                        <li>
                            Qty: <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                </select>
                        </li>
                        <li>
                            <button className="button">Add to Cart</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default ProductScreen;
