import React, { useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";

function Header({ storData, storNewData }) {
  // console.log(storData.lastname);
  // const userName = storData.name;

  // // console.log(userName);
  // const firstname = storData.firstname;

  // const lastname = storData.lastname;

  // const userName = firstname + lastname;
  // console.log(userName);
  // function displayName() {
  //   if (storData) {
  //   }
  // }
  // const [style,setStyle]=useState("headerDetalis")
  function handelclickMenubar() {
    // if(style);
  }

  useEffect(() => {
    function username() {
      const firstname = storData.firstname;
      console.log(firstname);
      // const lastname = storData.lastname;
      // console.log(lastname);
      // const userName = firstname + lastname;
      // console.log(userName);
    }
  });
  return (
    <div>
      <div className="header">
        <div className="menubar">
          <button onClick={handelclickMenubar}>
            <CiMenuBurger />
          </button>
        </div>
        <div>
          <Link to={"/"}>
            <img src="https://themewagon.github.io/electro/img/logo.png" />
          </Link>
        </div>
        <div className="headerDetalis">
          <div>
            <span className="iconheader">
              <FaUser />
            </span>
            <Link to={"/SignUp"} className="headerLink">
              Sign Up
              {/* {userName} */}
            </Link>
          </div>
          <div>
            <span className="iconheader">
              <FaCartShopping />
            </span>
            <Link to={"/AddToCart"} className="headerLink">
              Add To Cart
            </Link>
          </div>
          <div>
            <span className="iconheader">
              <FaSignInAlt />
            </span>

            <Link to={"/SignIn"} className="headerLink">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
