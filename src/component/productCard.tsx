/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { FC, useEffect, useState } from "react";
import { IProducts } from "../interfaces/product.interface";
import { Link } from "react-router-dom";

interface CProductCard{
  allProductsItems: IProducts;  
}

const ProductCard: FC<CProductCard> = (allProductsItems) => {
  const [product, setProduct] = useState<IProducts | null>(null);

  useEffect(() => {
    setProduct(allProductsItems.allProductsItems); 
  }, [allProductsItems]);

  return (
    <>
      {product && (
        <div className="card p-2">
          <Link to={`/details/${product.id}`}>
            <img className="card-img-top peoductImage" src={product.image} /> 
          </Link> 
          <div className="card-body p-1">
            <p className="peoductTitle">{product.title}</p>
            <button type="button" className="btn btn-primary btn-sm btn-lg">
              Add to cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};
 
export default ProductCard;
