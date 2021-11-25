import React, { useContext } from "react";
import { MyContext } from "../App";
import ReactStars from "react-rating-stars-component";
//import outlet to see the product on the top of the page with the all products
import { Link, Outlet } from "react-router-dom";
import "./Products.scss";
import { FaShoppingBag } from "react-icons/fa";

const Products = () => {
  const { products, cart, setCart } = useContext(MyContext);
  let { quantity, setQuantity } = useContext(MyContext);
  /*
const AddToCart=(product)=>{ //if this product already exist inside our cart let checkItem = cart.find(elem=>elem.title===product.title) if(checkItem){ let copyItem= {...checkItem} copyItem.quantity++; let updatedItem=cart.map(prod=> { if(prod.title===copyItem.title){ return copyItem }else{ return prod } }) setCart(updatedItem) }else{ product.quantity=1 ; setCart([...cart, product]) } } 
*/

  const AddToCart = (product) => {
    //if this product already inside cart
    let checkItem = cart.find((elem) => elem.title === product.title);
    //then after each click on the same product the if statement will be executed
    if (checkItem) {
      checkItem.quantity++;
      quantity++;

      setCart([...cart]); //dont add anything only update
      //first this else statement will be executed because when I click the button there is no product inside the cart
      //then for each product i create an quantity property and assign 1.
      //then after each click on the same product the if statement will be executed
      setQuantity(quantity);
    } else {
      product.quantity = 1;
      setCart([...cart, product]);
      quantity++;
      setQuantity(quantity);
    }
  };

  console.log(cart);
  return (
    <div className="products container">
      <Outlet />
      {products.map((product) => {
        return (
          <div className="product" key={product.id}>
            <Link
              className="product-class-name"
              to={`/products/${product.id}`}
              // state={product}
            >
              <img src={product.image} alt="product" />
              <h2 className="product-name">{product.title}</h2>
            </Link>
            <h2 className={product.price > 100 ? "discount" : "normal"}>
              ${product.price}
            </h2>
            <button
              className="add-to-chart-button"
              onClick={() => AddToCart(product)}
            >
              <FaShoppingBag className="add-to-chart-icon" />
              Add To Cart
            </button>
            {/* set the value for thee star */}
            <ReactStars
              count={5}
              size={36}
              activeColor="#ffd700"
              value={product.rating.rate}
              isHalf={true}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
