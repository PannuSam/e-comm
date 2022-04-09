import { useContext } from "react";
import { AiFillShopping } from "react-icons/ai";
import { FaVest } from "react-icons/fa";
import { GiArmoredPants, GiClothes, GiHoodie, GiFurShirt } from "react-icons/gi";
import { FaTshirt } from "react-icons/fa";
import { RiShirtLine } from "react-icons/ri";

import CartContext from "../CartContext";

const icons =[
    FaVest,
    GiArmoredPants,
    FaTshirt,
    RiShirtLine,
    GiArmoredPants,
    GiClothes,
    GiHoodie,
    GiFurShirt
];

function Card({id, name, price}){
const {addToCart}= useContext(CartContext);

const Icon =icons[id];
return(

<div className="container">
    <div className="product-box">
        <Icon className="icon"/>
    </div>
    <div className="purchase">
        <h3>{name}</h3>
    </div >
    <div className="price-cart">
    <h4>${price}</h4>
    <button onClick ={() => addToCart(Icon, name, price)}>
            <AiFillShopping style={{color: 'black', fontSize: '20px'}} />
        </button>
        </div>
</div>
);
}

export default Card;