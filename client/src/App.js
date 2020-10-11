import React, { useState } from 'react';
import Products from './components/Products';
import Header from './components/Header';
import Cart from './components/Cart';
import AddProduct from './components/AddProduct';
import Footer from './components/Footer';
import Home from './components/Home';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart'; 
const PAGE_ADD_PRODUCT = 'addProduct';
const PAGE_HOME = '/'; 

function App() {
  
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_HOME);


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

const navigateTo = (nextPage) => {
  setPage(nextPage);
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
      <button onClick={() => navigateTo(PAGE_HOME)} className="btn btn-link">Home</button>
       <button onClick={() => navigateTo(PAGE_PRODUCTS)} className="btn btn-link">View Products</button>
       <button onClick={() => navigateTo(PAGE_ADD_PRODUCT)} className="btn btn-link">Add Product</button> 
       <button onClick={() => navigateTo(PAGE_CART)} className="btn btn-link">Got to Cart</button>    
       {page === PAGE_HOME && <Home />}
       {page === PAGE_PRODUCTS && <Products addToCart={addToCart}/>}
       {page === PAGE_ADD_PRODUCT && <AddProduct />}
       {page === PAGE_CART && <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart}/>}
      </div>
    </div>
  </div>
  <Footer />
  </>  
  );
}

export default App;
