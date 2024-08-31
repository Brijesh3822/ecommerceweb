import React from "react";
import { Link } from "react-router-dom";

function HeaderSecound() {
  return (
    <div>
      <div className="headerScoundDetalis">
        <div>Home</div>
        <div>Top Deals</div>
        <div>Phone</div>

        <div>Laptops</div>
        <div>Accessories</div>
        {/* <Link to={"/"}>Home</Link>
        <Link to={"/"}>Top Deals</Link>
        <Link to={"/"}>Phone</Link>
        <Link to={"/"}>Laptops</Link>
        <Link to={"/"}>Accessories</Link> */}
      </div>
    </div>
  );
}

export default HeaderSecound;
