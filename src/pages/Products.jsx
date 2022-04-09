import Card from "../components/Card";
import { v4 as uuid } from "uuid";
import "../css/style.css";

function Products(){
    const products = [
        {id:0, name: "vest", price:40},
        {id:1, name: "pants", price:39},
        {id:2, name: "tshirt", price:23},
        {id:3, name: "shirt", price:58},
        {id:4, name: "jeans", price:61},
        {id:5, name: "jumper", price:96},
        {id:6, name: "sweatshirt", price:99},
        {id:7, name: "sweater", price:83},
    ]

    return(
        <div className="products"> 
        <h2> New Products </h2>
        
        <div className="product-list">
            
            {products.map((product) => (
                <Card key={uuid()} id={product.id} name={product.name} price={product.price} />
            ))}
        </div>
        </div>
    );
}

export default Products;