import React, { useState, useEffect } from 'react';
import axios from 'axios';


function  Products({addToCart}) {
 
const [products, addProduct] = useState([{}]);

useEffect( () => {
    const result = async () => {
        const response = await axios.get('/items');
        addProduct(response.data)
    }
    result();
}, []);


return (
    <>
    <h1 className="display-6 font-weight-bold mb-5 mt-4">Products List</h1>  
    <div className="row pb-5 mb-4">
    {products.map((product, id) =>(
    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0" key={id}>  
      <div className="card rounded shadow-sm border-0" >
         <div className="card-body p-4" >
         <img src={product.img} className="img-fluid d-block mx-auto mb-3" alt={product.name} ></img>
             <h5 className="card-title">{product.name}</h5>
             <p className="card-text">{product.price} Rs.</p>
           <button onClick={() => addToCart(product)}className="btn btn-info">Add to Cart</button>
      </div>
    </div>
    <p><br/></p>
    </div>
      )) } 
    </div>
   </>
    ); 
}

export default Products;