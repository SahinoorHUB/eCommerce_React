/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import "./cart.css";
import cartStore from "../../store/cart.store";
import CartAction from "../../component/cartAction/cartAction";
import { useEffect, useState } from "react";

const Cart = () => {
  const { cartItemUpdate, items } = cartStore();

  const removeCart = (product_id: number) => {
    cartItemUpdate(product_id, "R");
  };

  // const arr = [1,2,3,4,5,6];

  // let total = 0;
  // arr.forEach(each => {
  //   total = total + each;
  // });

  // console.log(total);
  // const newTotla = arr.reduce((accu, curr)=>{
  //   return accu + curr;
  // }, 0);

  // console.log(newTotla);

  //const newArr = items
  //console.log(newArr);
  // [4,5,6] // Error

  // [undefined, undefined, undefined, 4, 5, 6]
  // const [getTotalAmount, setTotalAmount] = useState(0);

  // const totalAmount = () => {
  //   return items.reduce((accu, curr) => {
  //     return accu + curr.totalPrice;
  //   }, 0);
  //   // console.log(total)
  //   // setTotalAmount(total)
  // };

  // useEffect(() => {
  //   // const prices = items.map((product) => product.totalPrice)
  //   // console.log(prices)
  //   const total = items.reduce((accu, curr)=>{
  //     return accu + curr.totalPrice;
  //   }, 0);
  //   console.log(total)
  //   setTotalAmount(total)
  // }, [items])

  return (
    <div className="container mt-5 mb-4">
      <div className="row">
        <div className="col">
          <div className="col-lg-12">
            <div className="card border shadow-0">
              <div className="m-4">
                <h4 className="card-title mb-4">Your shopping cart</h4>
                {items.map((item, index) => {
                  return (
                    <div className="row gy-3 mb-4" key={index}>
                      <div className="col-lg-4">
                        <div className="me-lg-5">
                          <div className="d-flex">
                            <img
                              src={item.image_url}
                              className="border rounded me-3"
                              style={{ width: "55px", height: "55px" }}
                            />
                            <div className="">
                              <p style={{ marginBottom: 0 }}>{item.name}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-sm-6 col-6 d-flex  justify-content-xl-end mb-2">
                        <div className="price-div">
                          <b>Price:</b> &nbsp;
                          <span className="price-tag">₹{item.price}</span>
                        </div>
                      </div>
                      <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                        <CartAction product_id={item.product_id} />
                      </div>
                      <div className="col-lg-2 col-sm-6 col-6 d-flex  justify-content-xl-end mb-2">
                        <div className="price-div">
                          <span className="price-tag">₹{item.totalPrice}</span>
                        </div>
                      </div>
                      <div className="col-lg-2 col-sm-6 d-flex  justify-content-xl-end mb-2">
                        <div className="float-md-end">
                          <a
                            className="btn btn-primary btn-sm removeCart"
                            onClick={() => removeCart(item.product_id)}
                          >
                            {" "}
                            Remove
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {items && items.length > 0 && (
                <div className="m-4 totalShow">
                  <div className="price-div">
                    <span className="price-tag">
                      TOTAL AMOUNT: ₹{" "}
                      {items.reduce((accu, curr) => {
                        return accu + curr.totalPrice;
                      }, 0)}
                    </span>
                  </div>
                </div>
              )}
              {items.length === 0 && (
                <div className="m-4 mt-0" style={{ textAlign: "center" }}>
                  <img
                    src={
                      "https://raw.githubusercontent.com/SahinoorHUB/eCommerce_React/main/src/assets/images/no-shopping-cart.png"
                    }
                    style={{ width: "70px", height: "70px" }}
                  />
                  <h6>NO CART ADDED</h6>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
