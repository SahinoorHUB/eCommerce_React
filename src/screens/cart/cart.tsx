/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import useStore from '../../store/cart.store';
import './cart.css';


const Cart = () => {
  const prevItems = useStore((state: any) => state.items) 

  const incrementCount = (id: any) => {
    prevItems.map((item: any) => {
      if (item.id === id) {
        item.quantity = item.quantity + 1
      }
    });
    console.log("incrementCount", prevItems)
  };

  const decrementCount = (id: any) => {
    prevItems.map((item: any) => {
      if (item.id === id) {
        item.quantity = item.quantity - 1
      }
    });
    console.log("decrementCount", prevItems)
  };

  return (
    <div className='container mt-5 mb-4'>
      <div className='row'>
        <div className='col'>
          <div className="col-lg-12">
            <div className="card border shadow-0">
              <div className="m-4">
                <h4 className="card-title mb-4">Your shopping cart</h4>
                {prevItems.map((item: any, index: number) => {
                  return (
                    <div className="row gy-3 mb-4" key={index}>
                      <div className="col-lg-5">
                        <div className="me-lg-5">
                          <div className="d-flex">
                            <img src={item.image} className="border rounded me-3" style={{ width: '55px', height: '55px', }} />
                            <div className="">
                              <p style={{ marginBottom: 0 }}>{item.title}</p>
                              <p className="text-muted">{item.category}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-sm-6 col-6 d-flex  justify-content-xl-end mb-2">
                        <div className="price-div"><b>Price:</b> &nbsp;<span className="price-tag">₹{item.price}</span></div>
                      </div>
                      <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                        <button className="countIndicater" disabled={item.quantity === 0} onClick={() => decrementCount(item.id)}>-</button>
                        <input type="number" className="form-control-countIndicater" value={item.quantity} />
                        <button className="countIndicater" onClick={() => incrementCount(item.id)}>+</button>
                      </div>
                      <div className="col-lg col-sm-6 d-flex  justify-content-xl-end mb-2">
                        <div className="float-md-end">
                          <a className="btn btn-primary btn-sm removeCart"> Remove</a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;


