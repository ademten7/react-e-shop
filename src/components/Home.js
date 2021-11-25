import React from "react";
import homeImage from "../images/shop-image.jpg";
import homeImage2 from "../images/online-shop2.png";

import "./Home.scss";

const Home = () => {
  return (
    <div>
      <h1 className="home-header">
        Benefits of E-commerce For Customers and Businesses
      </h1>
      <div className="home-info">
        <p className="info">
          E-commerce has been around for a long time. It started with Phil
          Brandenberger, a man who purchased the first online product - “Ten
          Summoner's Tale” studio album from Sting in 1994. Twenty seven years
          later, in 2021, online commerce took over the market. It is estimated
          that e-retail sales worldwide will soon grow up to 4,8 trillion
          dollars. E-commerce is progressing so significantly that it may soon
          be serving 2.14 billion people.
        </p>
        <img className="home-image" src={homeImage} alt="" />
      </div>
      <img className="home-image2" src={homeImage2} alt="" />
    </div>
  );
};

export default Home;
