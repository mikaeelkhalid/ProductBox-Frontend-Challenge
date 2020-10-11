import React from 'react'


export default function Cart({cart, clearCart, removeFromCart}) {
    
    const cartSum = () => {
        return cart.reduce((sum,  {price, quantity} ) => sum + price * quantity, 0);
      };

    return (
        <> 
        <h1 className="display-6 font-weight-bold mb-5 mt-4">Cart</h1>
        <p>Total Cost: {cartSum()}</p>
        {cart.length > 0 && 
        <button onClick={clearCart}className="btn btn-danger">Empty Cart</button>
        }
        <div className="row pb-5 mb-4 mt-4">
        {cart.map((product, id) =>(
         <div className="col-lg-3 col-md-6 mb-4 mb-lg-0" key={id}>  
          <div className="card rounded shadow-sm border-0" >
         <div className="card-body p-4" > 
         <img src={product.img} className="img-fluid d-block mx-auto mb-3" alt={product.name} ></img>
             <h5 className="card-title">{product.name}</h5>
             <p className="card-text">Price: {product.price} Rs.</p>
             <p className="card-text">Quantity: {product.quantity}</p>
           <button onClick={() => removeFromCart(product)}className="btn btn-danger">Remove</button>
      </div>
    </div>
    <p><br/></p>
    </div>
      )) } 
    </div>
    </>
    )
}
