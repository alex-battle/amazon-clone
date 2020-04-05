import React from 'react';
import img from '../images/slimshirt.jpg'

function Main(){
    const openMenu = () => {
        document.querySelector('.sidebar').classList.add('open')
    }
    const closeMenu = () => {
        document.querySelector('.sidebar').classList.remove('open')
    }
return(
    <div>
        <div className="grid-container">
            <header className="header">
                <div className="brand">
                    <button onClick={openMenu}>
                    &#9776;
                    </button>
                    <a href="index.html">Alexzon</a>
                </div>
                <div className="header-links">
                    <a href="cart.html">Cart</a>
                    <a href="signin.html">Sign In</a>
                </div>
            </header>
            <aside className="sidebar">
                <h3>Shopping Categories</h3>
                <button className="sidebar-close-button" onClick={closeMenu}>
                    X
                </button>
                <ul>
                    <li><a href="pants.html">Pants</a></li>
                    <li><a href="shirts.html">Shirts</a></li>
                </ul>
            </aside>
            <main className="main">
                <div className="content">
                    <ul className="products">
                        <li>
                            <div className="product">
                                <img className="product-image" src={img} />
                                <div className="product-name">
                                    <a href="product.html">
                                    Slim Shirt
                                    </a>
                                </div>
                                <div className="product-brand">Nike</div>
                                <div className="product-price">$60</div>
                                <div className="product-rating">4.5 stars(10 reviews)</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img className="product-image" src={img} />
                                <div className="product-name">
                                    <a href="product.html">
                                    Slim Shirt
                                    </a>
                                </div>
                                <div className="product-brand">Nike</div>
                                <div className="product-price">$60</div>
                                <div className="product-rating">4.5 stars(10 reviews)</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img className="product-image" src={img} />
                                <div className="product-name">
                                    <a href="product.html">
                                    Slim Shirt
                                    </a>
                                </div>
                                <div className="product-brand">Nike</div>
                                <div className="product-price">$60</div>
                                <div className="product-rating">4.5 stars(10 reviews)</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img className="product-image" src={img} />
                                <div className="product-name">
                                    <a href="product.html">
                                    Slim Shirt
                                    </a>
                                </div>
                                <div className="product-brand">Nike</div>
                                <div className="product-price">$60</div>
                                <div className="product-rating">4.5 stars(10 reviews)</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img className="product-image" src={img} />
                                <div className="product-name">
                                    <a href="product.html">
                                    Slim Shirt
                                    </a>
                                </div>
                                <div className="product-brand">Nike</div>
                                <div className="product-price">$60</div>
                                <div className="product-rating">4.5 stars(10 reviews)</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img className="product-image" src={img} />
                                <div className="product-name">
                                    <a href="product.html">
                                    Slim Shirt
                                    </a>
                                </div>
                                <div className="product-brand">Nike</div>
                                <div className="product-price">$60</div>
                                <div className="product-rating">4.5 stars(10 reviews)</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img className="product-image" src={img} />
                                <div className="product-name">
                                    <a href="product.html">
                                    Slim Shirt
                                    </a>
                                </div>
                                <div className="product-brand">Nike</div>
                                <div className="product-price">$60</div>
                                <div className="product-rating">4.5 stars(10 reviews)</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img className="product-image" src={img} />
                                <div className="product-name">
                                    <a href="product.html">
                                    Slim Shirt
                                    </a>
                                </div>
                                <div className="product-brand">Nike</div>
                                <div className="product-price">$60</div>
                                <div className="product-rating">4.5 stars(10 reviews)</div>
                            </div>
                        </li>
                        
                        
                    </ul>
                </div>
            </main>
            <footer className="footer">
                All rights reserved
            </footer>
        </div>
    </div>
    )
}
export default Main;