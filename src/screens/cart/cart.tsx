/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */ 
import './cart.css';
import cartStore from '../../store/cart.store';


const Cart = () => { 
  const { addToCart, items } = cartStore();

  const removeCart = (product: any) => {
    addToCart(product, 'R')
  }

  return (
    <div className='container mt-5 mb-4'>
      <div className='row'>
        <div className='col'>
          <div className="col-lg-12">
            <div className="card border shadow-0">
              <div className="m-4">
                <h4 className="card-title mb-4">Your shopping cart</h4>
                {items.map((item: any, index: number) => {
                  return (
                    <div className="row gy-3 mb-4" key={index}>
                      <div className="col-lg-5">
                        <div className="me-lg-5">
                          <div className="d-flex">
                            <img src={item.image_url} className="border rounded me-3" style={{ width: '55px', height: '55px', }} />
                            <div className="">
                              <p style={{ marginBottom: 0 }}>{item.name}</p> 
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-sm-6 col-6 d-flex  justify-content-xl-end mb-2">
                        <div className="price-div"><b>Price:</b> &nbsp;<span className="price-tag">₹{item.price}</span></div>
                      </div>
                      <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                        <button className="countIndicater">-</button>
                        <input type="number" className="form-control-countIndicater" readOnly value={item.qty} />
                        <button className="countIndicater">+</button>
                      </div>
                      <div className="col-lg col-sm-6 d-flex  justify-content-xl-end mb-2">
                        <div className="float-md-end">
                          <a className="btn btn-primary btn-sm removeCart" onClick={() => removeCart(item)}> Remove</a>
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


