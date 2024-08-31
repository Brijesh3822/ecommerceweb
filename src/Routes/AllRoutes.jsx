import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "../Components/SignUp";
import AddToCart from "../Components/AddToCart";
import Homepage from "../Components/Homepage";
import SignOut from "../Components/SignOut";
import SignIn from "../Components/SignIn";

function AllRoutes({ storData, storNewData, data, setData }) {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              data={data}
              setData={setData}
              storData={storData}
              storNewData={storNewData}
            />
          }
        ></Route>
        <Route
          path="/SignUp"
          element={<SignUp storData={storData} storNewData={storNewData} />}
        ></Route>
        <Route path="/SignOut" element={<SignOut />}></Route>
        <Route
          path="/AddToCart"
          element={<AddToCart data={data} setData={setData} />}
        ></Route>
        <Route
          path="/SignIn"
          element={<SignIn storData={storData} storNewData={storNewData} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;
