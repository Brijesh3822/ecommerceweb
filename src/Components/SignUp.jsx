import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function SignUp({ storData, storNewData }) {
  const [data, setData] = useState([
    {
      email: "",
      firstname: "",
      lastname: "",
      password: "",
    },
  ]);

  // const [email, setEmail] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [password, setPassword] = useState("");
  const handelSumbit = (e) => {
    e.preventDefault();
    console.log(data);
    
    if (data == " ") {
      alert("filed all Detelis ");
    } else {
      storNewData(data);
      alert("Registration Successful Now You Have SignIn Proccess");
    }

    // window.location = "/SignIn";
    // console.log(email);
    // console.log(firstName);
    // console.log(lastName);
    // console.log(password);
  };

  // function handelEmailchange(e) {
  //   setEmail(e.target.value);
  // }
  // function handelFristnamechange(e) {
  //   setFirstName(e.target.value);
  // }
  // function handelLastnamechange(e) {
  //   setLastName(e.target.value);
  // }
  // function handepasseordlchange(e) {
  //   setPassword(e.target.value);
  // }
  function handelchange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  }
  return (
    <div>
      <Header />
      <div className="signup">
        <div className="sing">
          <h1>Sign Up Details</h1>
          <div className="signupinputs">
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              onChange={handelchange}
            />
            <input
              type="text"
              placeholder="Enter FirstName"
              name="firstname"
              onChange={handelchange}
            />
            <input
              type="text"
              placeholder="Enter LastName"
              name="lastname"
              onChange={handelchange}
            />
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={handelchange}
            />

            <button onClick={handelSumbit}>Sumbit</button>
          </div>
          <div className="singupdetalis">
            Already have an account?
            <Link to={"/SignIn"} className="singupdetalisLink">
              Sign In
            </Link>
          </div>
          <div className="singupdetalis">
            By signing in, I agree to the electro
            <span> Terms and Conditions,</span>
            <span>Privacy Statement</span> and
            <span>Rewards Terms and Conditions.</span>
          </div>
          <div className="signImages">
            <img src="https://a.travel-assets.com/egds/marks/apple.svg" />
            <img src="https://a.travel-assets.com/egds/marks/facebook.svg" />
            <img src="https://a.travel-assets.com/egds/marks/google.svg" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;
