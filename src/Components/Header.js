import React from "react";
import { NavLink } from "react-router-dom";


function Header() {
  return (
    <header>
      <nav>
      <NavLink to="/" >
          <h1 className="branding">
            Sneaker World
          </h1>
        </NavLink>
        <div className="navigation">
          <NavLink className="button1" exact to="/sneakers"
         style={{
           
         }}
          >
                 {`     Shop Sneakers     `}
          </NavLink>
          <NavLink className="button" exact to="/sneakercollection">
            {`     Your Collection     `}
          </NavLink>
          <NavLink className="button" exact to="/wishlist">
          {`    Wish List     `}
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;