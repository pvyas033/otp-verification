import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";

const Header = ({ currentUser }) => (
  <div className="header">
      <Logo className="logo" />
    <div className="options">
    <h1 className="option">
        SHOP
      </h1>
      <h1 className="option">
        CONTACT
      </h1>
    </div>
  </div>
);

export default Header;
