/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductService from "../services/product.service";

 

const ProductDetails = () => {
  const { product_id } = useParams();

  useEffect(()=>{ 
    const fetchProduct = async () => { 
      try {
        if (product_id) { 
          const productDetails = await new ProductService().getSingleProduct(product_id);  
          console.log(productDetails, "<<<<<<<<<<<>>>>>>>>>>>")
        }
      } catch (error) {  
      } 
    };
    fetchProduct();
  }, [product_id])

  return (
    <div className="row py-3"> 
         <p>PRODUCT DETAILS {product_id}</p>
    </div>
  );
};

export default ProductDetails;
