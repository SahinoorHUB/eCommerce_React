/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { FC, useEffect, useState } from "react";
import { IProducts } from "../interfaces/product.interface";
import { Link } from "react-router-dom";
import RatingShowing from "./rating/RatingShowing";
import useStore from "../store/cart.store";

interface CProductCard{
  allProductsItems: IProducts;  
}

const ProductCard: FC<CProductCard> = (allProductsItems) => {
  const [product, setProduct] = useState<IProducts | null>(null);
  const increasePopulation = useStore((state: any) => state.setItems) 
  const prevItems = useStore((state: any) => state.items) 

  useEffect(() => {
    setProduct(allProductsItems.allProductsItems); 
  }, [allProductsItems]);

  const handleAddItem = (additem: IProducts) => { 
    let data = {
      ...additem,
      quantity: 1
    }
    console.log(data)
    increasePopulation([...prevItems, data]);  
  };

  return (
    <>
      {product && (
        <div className="card p-2">
          <Link to={`/details/${product.id}`}>
            <img className="card-img-top peoductImage" src={product.image} /> 
          </Link> 
          <div className="card-body p-1">
            <p className="peoductTitle">{product.title}</p> 
            <RatingShowing averageRating={Number(product.rating.rate)} totalStars={5} fontSize={'16px'} fontSizeInfo={'13px'}/>
            {/* <button type="button" className="btn btn-primary btn-sm btn-lg" onClick={() => handleAddItem(product)}>
              Add to cart 
            </button> */}
            <button type="button" className="btn btn-primary btn-sm btn-lg" onClick={() => handleAddItem(product)}>
              Add to cart 
            </button>
          </div>
        </div>
      )}
    </>
  );
};
 
export default ProductCard;
