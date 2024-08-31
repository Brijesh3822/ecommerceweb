import React, { useState } from "react";
import Header from "./Header";
import HeaderSecound from "./HeaderSecound";
import HeaderDeals from "./HeaderDeals";
import Items from "./Items";
import Footer from "./Footer";

function Homepage({ data, setData, storData, storNewData }) {
  return (
    <div>
      <Header storData={storData} storNewData={storNewData} />
      <HeaderSecound />
      <HeaderDeals />
      <Items data={data} setData={setData} />
      <Footer />
    </div>
  );
}

export default Homepage;
