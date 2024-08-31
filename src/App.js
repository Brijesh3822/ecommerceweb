import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Components/Homepage";
// import HeaderSecound from "./Components/HeaderSecound";
import HeaderDeals from "./Components/HeaderDeals";
import Items from "./Components/Items";
import Footer from "./Components/Footer";
import AllRoutes from "./Routes/AllRoutes";
import { useState } from "react";
function App() {
  const [newData, setNewData] = useState("");
  const [data, setData] = useState([]);
  console.log(newData);
  console.log(data);
  return (
    <div>
      {/* lkhlikh */}
      <AllRoutes
        storData={newData}
        storNewData={setNewData}
        data={data}
        setData={setData}
      />
      {/* <HeaderSecound /> */}
      {/* <HeaderDeals />
      <Items /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
