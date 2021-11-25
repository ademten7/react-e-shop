import React, { useContext } from "react";
import logo from "../images/logo1.jpg";
import { NavLink } from "react-router-dom";
import { MyContext } from "../App";
import "./Navbar.scss";
import { FaSearch } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";

const Navbar = () => {
  const { user, quantity } = useContext(MyContext);
  return (
    <div className="container head-nav ">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="" width="200" height="150" />
        </NavLink>
      </div>
      <nav className="ul">
        <ul className="nav-list">
          {user ? (
            <li>
              <NavLink
                className={(node) =>
                  node.isActive ? "myActiveClass" : "myNotActiveClass"
                }
                to="/profile"
              >
                Profile
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink
                className={(node) =>
                  node.isActive ? "myActiveClass" : "myNotActiveClass"
                }
                to="/login"
              >
                Login
              </NavLink>
            </li>
          )}

          <li>
            <NavLink
              className={(node) =>
                node.isActive ? "myActiveClass" : "myNotActiveClass"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(node) =>
                node.isActive ? "myActiveClass" : "myNotActiveClass"
              }
              to="/products"
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(node) =>
                node.isActive ? "myActiveClass" : "myNotActiveClass"
              }
              to="/cart"
            >
              Cart
            </NavLink>
          </li>

          <li className="contact">
            <NavLink
              className={(node) =>
                node.isActive ? "contact-myActiveClass" : "myNotActiveClass"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li className="search">
            <FaSearch />
          </li>
          <li className="shopping-bag-list">
            <GiShoppingCart className="shopping-bag" />
            <span className="piece">{quantity === 0 ? 0 : `+${quantity}`}</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
