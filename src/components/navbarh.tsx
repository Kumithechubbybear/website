import React from "react";


function nav() {
    var x = document.getElementById("myTopnav");
    if (x!.className === "topnav") {
      x!.className += " responsive";
    } else {
      x!.className = "topnav";
    }
  }

  
export default function Nav() {
    return(
<div className="topnav" id="myTopnav">
  <a href="#home" className="active">Home</a>
  <a href="#news">Product</a>
  <a href="#about">Order</a>
  <a href="#contact">Contact</a>
  <a href="#about">Donate</a>
  <a href="javascript:void(0);"  className="icon" onClick={nav}>&#9776;</a>
</div>
    )
}
