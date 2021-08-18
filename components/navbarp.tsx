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
  <div className="container">
  <a href="/" >Home</a>
  <a href="/Product" className="active">Product</a>
  <a href="/Order">Order</a>
  <a href="/Contact">Contact</a>
  <a href="/Donate">Donate</a>
  <a href="javascript:void(0);"  className="icon" onClick={nav}>&#9776;</a>
  </div>
</div>
    )
}
