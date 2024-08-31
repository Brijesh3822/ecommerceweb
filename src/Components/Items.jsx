import React, { useEffect, useState } from "react";
import { MdStars } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa6";

function Items({ data, setData }) {
  console.log(data);
  const [post, setPost] = useState([]);
  // const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://cornet-1.onrender.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPost(data);
      });
  }, []);


  
  function handelSumbit(post) {
    console.log(post);
    setData([...data, { ...post, qty: 1, id: data.length + 1 }]);
    // const product = cart.find((el) => el.id == post.id);
    // console.log(product);
    // setCart([...cart, { ...post, quantity: 1 }]);
    // setCart(cart.map((e) => (e.id == post.id ? { ...e, qty: e.qty + 1 } : e)));
    // console.log(cart);
    // setData(cart);
  }
  //  function handelSumbit(selectedProduct) {
  //    // Check if the product already exists in the cart
  //    const existingProduct = cart.find(
  //      (item) => item.id === selectedProduct.id
  //    );

  //    if (existingProduct) {
  //      // If the product exists, increase the quantity
  //      setCart(
  //        cart.map((item) =>
  //          item.id === selectedProduct.id
  //            ? { ...item, quantity: item.quantity + 1 }
  //            : item
  //        )
  //      );
  //    } else {
  //      // If the product does not exist, add it with a quantity of 1
  //      setCart([...cart, { ...selectedProduct, quantity: 1 }]);
  //    }

  //    console.log("Cart:", cart); // To debug and check cart contents
  //  }
  return (
    <div className="mainproducts">
      <div className="productsTital">
        <h1>Products</h1>
      </div>

      <div>
        <div className="products">
          {post.map((post) => {
            return (
              <div className="allProducts">
                <div className="productsimage">
                  <img src={post.image} />
                </div>
                <div className="prodectsDetalis">
                  <div className="prodectsname">{post.category}</div>
                  <div className="prodectspric">
                    <FaDollarSign />
                    {post.price}
                  </div>
                  <div className="prodectsTitle">{post.title}</div>
                  <div className="reviewandaddtocart">
                    <span className="prodectsReview">
                      <MdStars className="reviewIcon" />
                      {post.rating.rate}/{post.rating.count}
                    </span>
                    <button
                      onClick={() => handelSumbit(post)}
                      className="AddtocartButton"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Items;
