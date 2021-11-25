import React, { useContext } from "react";
import "./SingleProduct.scss";
// import { useLocation } from "react-router-dom";
//second way
//import useParams
import { useParams } from "react-router-dom";
import { MyContext } from "../App";
import ReactStars from "react-rating-stars-component";

const SingleProduct = () => {
  //   const location = useLocation();
  const params = useParams();
  //import all products
  const { products } = useContext(MyContext);

  let Item = products.find((item) => Number(item.id) === Number(params.id));
  //id from product is number but id from App is string we dont need to check types === thats why we used ==
  //id===> coming from Route path from App.js

  console.log(params);
  return (
    <div className="single-product">
      {Item && (
        <div>
          <div className="image">
            <img src={Item.image} width="400" height="400" alt="" />
          </div>
          <div>
            <h2 className="title">{Item.title}</h2>
            <p className="description"> {Item.description}</p>
            <h2 className={Item.price > 100 ? "discount" : "normal"}>
              {" "}
              ${Item.price}
            </h2>
            <div className="rate">
              <ReactStars
                count={5}
                size={36}
                activeColor="#ffd700"
                value={Item.rating.rate}
                isHalf={true}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
