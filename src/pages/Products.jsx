import Card from "../components/Card";
import { v4 as uuid } from "uuid";

function Products(){
    const products = [
        {name: "vest", price:40},
        {name: "pants", price:39},
        {name: "tshirt", price:23},
        {name: "shirt", price:58},
        {name: "jeans", price:61},
        {name: "jumper", price:96},
        {name: "sweatshirt", price:100},
        {name: "sweater", price:83},
    ]

    return(
        <div className="product-list">
            {products.map((product) => (
                <Card key={uuid()} name={product.name} price={product.price} />
            ))}
        </div>
    );
}

export default Products;