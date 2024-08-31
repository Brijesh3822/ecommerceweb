import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function SignIn({ storData, storNewData }) {
  console.log(storData);
  const [signInData, setSignInData] = useState([
    {
      email: "",
      password: "",
    },
  ]);

  function handelChange(e) {
    setSignInData({ ...signInData, [e.target.name]: e.target.value });

    console.log(signInData);
    // setSignInData(signInData);
  }

  function handelSumbit(e) {
    e.preventDefault();
    console.log(signInData);

    const email = signInData.email;
    console.log(email);
    const storEmail = storData.email;
    console.log(storEmail);

    const password = signInData.password;
    console.log(password);
    const storPassword = storData.password;
    console.log(storPassword);

    if (email == storEmail && password == storPassword) {
      console.log("login");
      alert("Login Successfully");
    } else {
      console.log("worng Email and password");
      alert("worng Email or password");
    }
    // var data = storData[0].find((el) => {
    //   return el.email == signInData.email;
    // });
    // console.log(data);
    // if (!Array.isArray(storData)) {
    //   console.error("storData is not an array");
    //   return;
    // }

    // const data = storData[0].find((el) => el.email == signInData.email);
    // console.log(data);

    //    if (user) {
    //   console.log("Login successful");
    //   // You can redirect or perform other actions upon successful login here
    // } else {
    //   console.log("Login data not found");
    // Handle failed login attempt (e.g., show an error message)
    // if (signInData.email == storData.email) {
    //   console.log("login");
    // } else {
    //   console.log("login data not found");
    // }
  }

  return (
    <div>
      <Header />
      <div className="signIn">
        <div className="signInPageDetalis">
          <h1>Login Details</h1>
          <div className="signInInput">
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              onChange={handelChange}
            />
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={handelChange}
            />
            <button onClick={handelSumbit}>Sumbit</button>
          </div>
          <div>
            <span className="forgotPassword">Forgot password? </span>
            <Link to={"/SignUp"} className="noSignIn">
              Don't have an account?
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

export default SignIn;
// import React, { useState } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import { Link } from "react-router-dom";

// function SignIn({ storData }) {
//   console.log(storData);

//   // Initialize signInData as an object
//   const [signInData, setSignInData] = useState({
//     email: "",
//     password: "",
//   });

//   // Handle input changes
//   function handelChange(e) {
//     setSignInData({ ...signInData, [e.target.name]: e.target.value });
//     console.log(signInData);
//   }

//   // Handle form submission
//   function handelSumbit(e) {
//     e.preventDefault();
//     console.log(signInData);

//     // Check if storData is an array
//     if (!Array.isArray(storData)) {
//       console.error("storData is not an array");
//       return;
//     }

//     // Find a user in storData that matches the input email and password
//     const user = storData.find(
//       (user) =>
//         user.email === signInData.email && user.password === signInData.password
//     );

//     if (user) {
//       console.log("Login successful");
//       // Perform actions upon successful login (e.g., redirect)
//     } else {
//       console.log("Login data not found");
//       // Handle failed login attempt (e.g., show an error message)
//     }
//   }

//   return (
//     <div>
//       <Header />
//       <div className="signIn">
//         <div className="signInPageDetalis">
//           <h1>Login Details</h1>
//           <div className="signInInput">
//             <input
//               type="text"
//               placeholder="Enter Email"
//               name="email"
//               onChange={handelChange}
//             />
//             <input
//               type="password"
//               placeholder="Enter Password"
//               name="password"
//               onChange={handelChange}
//             />
//             <button onClick={handelSumbit}>Submit</button>
//           </div>
//           <div>
//             <span className="forgotPassword">Forgot password? </span>
//             <Link to={"/SignUp"} className="noSignIn">
//               Don't have an account?
//             </Link>
//           </div>
//           <div className="singupdetalis">
//             By signing in, I agree to the electro
//             <span> Terms and Conditions,</span>
//             <span>Privacy Statement</span> and
//             <span>Rewards Terms and Conditions.</span>
//           </div>
//           <div className="signImages">
//             <img
//               src="https://a.travel-assets.com/egds/marks/apple.svg"
//               alt="Apple Logo"
//             />
//             <img
//               src="https://a.travel-assets.com/egds/marks/facebook.svg"
//               alt="Facebook Logo"
//             />
//             <img
//               src="https://a.travel-assets.com/egds/marks/google.svg"
//               alt="Google Logo"
//             />
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default SignIn;
