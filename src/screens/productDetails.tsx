/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductService from "../services/product.service";
import RatingShowing from "../component/rating/RatingShowing";
import { IoIosCart } from "react-icons/io";
import CartAction from "../component/cartAction/cartAction";
import cartStore from "../store/cart.store";

const ProductDetails = () => {
  const { product_id } = useParams();
  const [getAllProductDetails, setAllProductDetails] = useState<any>(null);
  const { addToCart, items } = cartStore();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (product_id) {
          const productDetails = await new ProductService().getSingleProduct(
            product_id
          );
          setAllProductDetails(productDetails);
        }
      } catch (error) {}
    };
    fetchProduct();
  }, [product_id]);

  const handleAddItem = () => {
    addToCart(getAllProductDetails);
  };

  const isCurrentItemInCart = () => {
    return items.find(
      (eachCartItem) => eachCartItem.product_id === getAllProductDetails.id
    );
  };

  return (
    <>
      {getAllProductDetails && (
        <div className="container main-singel-product mb-5">
          <div className="row">
            <div className="col-md-6 ">
              <div id="container">
                <img
                  className="card-img-top peoductImageBig"
                  src={getAllProductDetails.image}
                />
              </div>
            </div>
            <div className="col-md-6">
              <h3 className="gapping-top">{getAllProductDetails.title}</h3>
              <p className="brand-list">
                Brand: {getAllProductDetails.category}
              </p>
              <RatingShowing
                averageRating={Number(getAllProductDetails.rating.rate)}
                totalStars={5}
                fontSize={"20px"}
                fontSizeInfo={"15px"}
              />
              <p className="item-indicator">
                <strong>About this item</strong>
              </p>
              <span className="a-list-item">
                {getAllProductDetails.description}
              </span>
              <div className="price-div">
                <b>Price:</b> &nbsp;
                <span className="price-tag">
                  ₹ {getAllProductDetails.price}
                </span>
              </div>

              {!isCurrentItemInCart() ? (
                <div className="three-button">
                  <div className="product-customize card-add">
                    <button
                      className="btn btn-primary btn-sm btn-lg"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        padding: "12px 21px"
                      }}
                      onClick={() => handleAddItem()}
                    >
                      <span
                        className="addtocartIcon"
                        style={{ fontSize: "26px", marginRight: "10px" }}
                      >
                        {" "}
                        <IoIosCart></IoIosCart>
                      </span>
                      Add To Cart
                    </button>
                  </div>
                </div>
              ) : (
                <div style={{marginTop: 17}}>
                  <CartAction product_id={getAllProductDetails.id} />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
