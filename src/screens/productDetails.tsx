/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductService from "../services/product.service";

const ProductDetails = () => {
  const { product_id } = useParams();
  const [getAllProductDetails, setAllProductDetails] = useState<any>(null);

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

  return (
    <>
      {getAllProductDetails && (
        <div className="container main-singel-product">
          <div className="row">
            <div className="col-md-6 left-col">
              <div id="container">
                <img className="card-img-top peoductImageBig" src={getAllProductDetails.image} /> 
              </div>
            </div>
            <div className="col-md-6">
              <h3 className="gapping-top">{getAllProductDetails.title}</h3>
              <p className="brand-list">Brand: {getAllProductDetails.category}</p>
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
              <div className="three-button">
                <div className="product-customize card-add">
                  <div className="btn btn--sm morph">
                    <i className="fas fa-cart-arrow-down"></i>
                    Add To Cart
                  </div>
                </div>
                <div className="btn-sm-2">
                  <div className="btn btn--sm morph">
                    <i className="fas fa-heart"></i>
                    Add To Wishlist
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
