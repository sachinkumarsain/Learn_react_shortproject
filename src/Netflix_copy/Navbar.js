import React, { useState } from "react";
import "./row.css";
import logo from "../images/Netflix_logo.png"
import emoji from "../images/emoji.jpeg"

function Navbar() {
  const [isdark, setdark] = useState(false)
  window.onscroll = () => {
    setdark(window.scrollY > 170 ? true : false)
  }

  return (

    <>
      <header className={isdark ? "dark" : ""}>
        <div className="logo">
          <img src={logo}></img>
        </div>
        <div className="emoji">
          <img src={emoji}></img>
        </div>
      </header>
    </>
  );
}

export default Navbar;
