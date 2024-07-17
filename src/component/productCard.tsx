/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { FC, useEffect, useState } from "react";
import { IProducts } from "../interfaces/product.interface";
import { Link } from "react-router-dom";
import RatingShowing from "./rating/RatingShowing";
import useStore from "../store/cart.store";
import cartStore from "../store/cart.store";

interface CProductCard {
  product: IProducts;
}

const ProductCard: FC<CProductCard> = ({ product }) => {
  const { addToCart, items } = cartStore();

  const handleAddItem = () => {
    addToCart(product)
  };

  const isCurrentItemInCart = () => {
    return items.find(eachCartItem => eachCartItem.product_id === product.id);
  }

  const handleAddItemDesc = () => {
    addToCart(product, 'D')
  }

  return (
    <>
      {product && (
        <div className="card p-2">
          <Link to={`/details/${product.id}`}>
            <img className="card-img-top peoductImage" src={product.image} />
          </Link>
          <div className="card-body p-1">
            <p className="peoductTitle">{product.title}</p>
            <RatingShowing averageRating={Number(product.rating.rate)} totalStars={5} fontSize={'16px'} fontSizeInfo={'13px'} />
            {/* <button type="button" className="btn btn-primary btn-sm btn-lg" onClick={() => handleAddItem(product)}>
              Add to cart 
            </button> */}

            {!isCurrentItemInCart() ? <button type="button" className="btn btn-primary btn-sm btn-lg" onClick={() => handleAddItem()}>
              Add to cart
            </button> :
              <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                <button className="countIndicater" onClick={() => handleAddItemDesc()}>-</button>
                <input type="number" className="form-control-countIndicater" value={isCurrentItemInCart()?.qty} />
                <button className="countIndicater" onClick={() => handleAddItem()}>+</button>
              </div>
            }



          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
