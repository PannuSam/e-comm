import React, { useContext } from 'react'
import CartContext from '../CartContext'
import { v4 as uuid } from "uuid";
import "../css/style.css";

function Checkout() {
    const { items } =useContext(CartContext);
    if(items.length ==0){
      return (

        <h2 style={{textAlign:'center'}}>
          Your bag is Empty!
        </h2>
      );
    }
    else{
  return (
    <>
    <h1 style={{marginLeft:'1.5em'}}>Checkout</h1>
    <div className="checkout-container">
     
    {items.map((item) => (
      
      
    <div key={uuid()}>
     
      <div className="container">
      <div className="product-box">
     <item.Icon className="icon"/>
     </div>
     <div className="purchase">
        <h2>{item.name}</h2>
        </div>
        <div className="price-tag" style={{ textAlign:'center', paddingTop:'19px', borderTop: 'solid 1px black' }}>
        <h3>${item.price}</h3>
        </div>
    </div>
    </div>
  
    ))}
   </div>
</>
  )
}
}

export default Checkout