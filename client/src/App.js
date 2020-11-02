import React, { useState } from 'react';
import Products from './components/Products';
import Header from './components/Header';
import Cart from './components/Cart';
import AddProduct from './components/AddProduct';
import Footer from './components/Footer';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  
  const [cart, setCart] = useState([]);
  // const [page, setPage] = useState(PAGE_HOME);


const removeFromCart = (productToRemove) => {
    setCart(cart.filter(product => product !== productToRemove ))
  } 

const addToCart =(product) => {
    //console.log("added to cart is clicked..")
    let itemInCart = cart.find(item => product.name === item.name);
    let newCart = [...cart];
    if(itemInCart){
      itemInCart.quantity++;
    }
    else {
      itemInCart = {
        ...product, 
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart)
}

const clearCart = () => {
  //console.log("clear cart get clicked..")
  setCart([])
}


const cartTotal = () => {
  return cart.reduce((sum, { quantity }) => sum + quantity, 0);
};

  return (
    <>
    <Header />
    <div className="container">
    <div className="row">
    <div className="col-lg-12 text-center">
     <p><br/></p>
      <p><img src="./img/shopping-cart-empty-side-view.png" width="32" alt="shoping-cart"></img> <b>{cartTotal()}</b></p>
     
  <Router>
     <ul className="nav justify-content-center">

       <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
       </li>
      <li className="nav-item">
        <Link className="nav-link" to="/products">View Products</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/cart">Go to Cart</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/add-products">Add Product</Link>
      </li>

    </ul>
 
  <Switch>
      <Route exact path="/">
            <Home />
       </Route>
       
       <Route path="/products">
            <Products addToCart={addToCart} />
        </Route>

        <Route path="/add-products">
            <AddProduct />
        </Route>

        <Route path="/cart">
        <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart}/>
        </Route>
      
      </Switch>
      
    </Router>

      </div>
    </div>
  </div>
  <Footer />
  </>  
  );
}

export default App;
