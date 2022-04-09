import { Link } from "react-router-dom";
import { useContext } from "react";
import { AiFillShopping } from "react-icons/ai";
import CartContext from "../CartContext";
import "../css/style.css";
import Home from "../pages/Home";

 
function Nav() {

  const { items } = useContext(CartContext);
  return (
    <header>
      <h2>X-Ecomm</h2>
    <nav>
      <ul>
      <li>
          <Link to="/home" >HOME</Link>
        </li>
        <li>
          <Link to="/products" >PRODUCTS</Link>
        </li>

        <li>
          <Link to="/checkout" >
            <div className="cart">
              <AiFillShopping style={{color: 'black', fontSize: '20px'}} />
               <span> BAG ({items.length})</span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
    </header>
  );
}

export default Nav;
