import "./App.scss";
import React, { createContext, useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import "bootstrap/dist/css/bootstrap.min.css";

//context API
export const MyContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);

  //context  API
  const fetchedProducts = async () => {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();

    setProducts(data);
  };

  useEffect(() => {
    //componentDidMount
    fetchedProducts();
  }, []);

  return (
    <MyContext.Provider
      value={{
        user,
        setUser,
        products,
        setProducts,
        cart,
        setCart,
        quantity,
        setQuantity,
      }}
    >
      {/* // For the deployment instead of BrowserRouter */}
      <HashRouter>
        <div className="App container">
          <Navbar />
          <Routes>
            {/* no need exact keyword element with tag</> Routes give us exact path*/}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            {/* to see the product on the top with other products */}
            <Route path="/products" element={<Products />}>
              <Route path="/products/:id" element={<SingleProduct />} />
            </Route>

            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </HashRouter>
    </MyContext.Provider>
  );
}

export default App;
