/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { FC } from "react";
import { IProducts } from "../interfaces/product.interface";
import { Link } from "react-router-dom";
import RatingShowing from "./rating/RatingShowing"; 
import cartStore from "../store/cart.store";
import CartAction from "./cartAction/cartAction";

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

            {!isCurrentItemInCart() ? <button type="button" className="btn btn-primary btn-sm btn-lg" onClick={() => handleAddItem()}>
              Add to cart
            </button> :
              <CartAction product_id={product.id} />
            }



          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
