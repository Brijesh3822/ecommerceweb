import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { MdStars } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa6";

function AddToCart({ data, setData }) {
  const [totalDisplay, setTotalDisplay] = useState("");
  // function total(e) {
  //   setData([...data, e]);
  //   setTotal(total + e.price);

  // }
  function handelQtyDecrement(id) {
    const product = data.find((el) => el.id == id);
    console.log(product);
    if (product.qty > 1) {
      product.qty = product.qty - 1;
      data = data.map((el) => (el.id == id ? product : el));
      console.log(data);

      setData(data);
    } else {
      data = data.filter((el) => el.id != id);
      setData(data);
      console.log(data);
      // alert("product not found");
    }
  }

  function handelQtyIncrement(id) {
    const product = data.find((el) => el.id == id);
    console.log(product);
    if (product) {
      product.qty += 1;

      data = data.map((el) => (el.id == id ? product : el));

      setData(data);
      console.log(data);
    } else {
      alert("product not found");
    }
  }

  useEffect(() => {
    function handelTotal() {
      const total = data.reduce((pr, cr) => {
        return pr + cr.price * cr.qty;
      }, 0);
      console.log(total);

      setTotalDisplay(total);
    }
    handelTotal();
  }, [data]);

  // console.log(handelTotal);
  return (
    <div>
      <Header />
      <div>
        <div className="AddToDetalis">
          <h1>Add To Cart Producat</h1>
          <h1>Total : {totalDisplay}</h1>

          <button>Proceed To Pay</button>
        </div>
        <div className="allProduct">
          {data.map((data) => {
            return (
              <div className="product">
                <div className="productImage">
                  <img src={data.image} />
                </div>

                <div className="prodectsDetalis">
                  <div>
                    <div className="prodectsname">{data.category}</div>
                  </div>
                  <div>
                    <span className="prodectspric">
                      <FaDollarSign />
                      {data.price}
                    </span>
                  </div>
                  <div className="prodectsTitle">
                    <span>{data.title}</span>
                  </div>
                  <div className="foterProdectDetalis">
                    <div>
                      <MdStars className="reviewIcon" />
                      {data.rating.rate}/{data.rating.count}
                    </div>

                    <button
                      onClick={() => handelQtyDecrement(data.id)}
                      className="buttonDecrement"
                    >
                      -
                    </button>

                    <div className="displayQty">{data.qty}</div>
                    <button
                      onClick={() => handelQtyIncrement(data.id)}
                      className="buttonIncremnet"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AddToCart;
