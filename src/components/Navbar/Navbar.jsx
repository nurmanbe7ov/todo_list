import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <nav className="container">
        <div className="nav_inner">
          <div>
            <img
              width="100px"
              src="https://raw.githubusercontent.com/mustafaynk/todolist/master/appgallery/logo.png"
              alt=""
            />
          </div>
          <div>
            <h1 className="nav-inner__text">MY TODO LIST</h1>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
