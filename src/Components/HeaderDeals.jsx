import React, { useEffect, useState } from "react";
import { IoPricetag } from "react-icons/io5";
import { FaPercent } from "react-icons/fa";
import { RiExchangeFill } from "react-icons/ri";

function HeaderDeals() {
  const [time, setTime] = useState(1 * 60);
  const [running, setRuinng] = useState(0);
  // const [input, setInput] = useState();

  // function handelChange(e) {
  //   setInput(e.target.value);
  // }

  // function handelSumbit() {
  //   setTime(input * 60);
  // }

  // function handelStartStop() {
  // setRuinng(!running);
  // }

  useEffect(() => {
    window.onload = () => {
      setRuinng(running);
    };
    let inter;
    if (running) {
      if (time !== 0) {
        inter = setInterval(() => setTime(time - 1), 1000);
      } else {
        alert("Time off");
      }
    }
    return () => clearInterval(inter);
  });
  return (
    <div>
      <div className="HeaderDeals">
        <div>
          {/* <input type="text" onChange={handelChange} />
          <button onClick={handelSumbit}>sumbit</button> */}
        </div>
        <div>
          {/* <span>
            {Math.floor(time / 60)}:{time % 60}
          </span> */}
        </div>
        <div className="dealsdiv">
          {/* <div className="deals">
              <div>GREAT</div>
            </div> */}
          <div className="deals">
            <div className="dealsTital">
              <h1>Big Savinges For Everyone</h1>
              <h3>Starts early,on 26 August Midnight</h3>
            </div>
            <div className="dealsDetalis">
              <div className="dealsSubDeatlis">
                <div className="DealsIcon">
                  <IoPricetag className="icon" />
                </div>
                <div> GREAT DEALS</div>
              </div>
              <div className="dealsSubDeatlis">
                <div className="DealsIcon">
                  <FaPercent className="ico2" />
                </div>
                <div className="dealstext">NOCOST EMI</div>
              </div>
              <div className="dealsSubDeatlis">
                <div className="DealsIcon">
                  <RiExchangeFill className="icon" />
                </div>
                <div> EXCHANGE OFFER</div>
              </div>
            </div>
            <div className="dealsImage">
              <img src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2023/01/SBI-Logo-new-removebg-preview.png" />
              <div>
                <div>10% Instant Discount</div>
                <div>with SBI Credit Card & EMI Transactions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderDeals;
