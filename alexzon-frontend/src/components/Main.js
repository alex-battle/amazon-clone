import React from 'react';
import img from '../images/slimshirt.jpg'
// import data from '../data'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import HomeScreen from './HomeScreen'
import ProductScreen from './ProductScreen'

function Main(){
    const openMenu = () => {
        document.querySelector('.sidebar').classList.add('open')
    }
    const closeMenu = () => {
        document.querySelector('.sidebar').classList.remove('open')
    }
return(
    <BrowserRouter>
    <div>
        <div className="grid-container">
            <header className="header">
                <div className="brand">
                    <button onClick={openMenu}>
                    &#9776;
                    </button>
                    <Link to="/">Alexzon</Link>
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
                <Route path="/product/:id" component={ProductScreen} />
                <Route path="/" exact={true} component={HomeScreen} />
                <div className="content">
                    
                </div>
            </main>
            <footer className="footer">
                All rights reserved
            </footer>
        </div>
    </div>
    </BrowserRouter>
    )
}
export default Main;