/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useEffect, useState } from "react";
import ProductCard from "../component/productCard";
import { IProducts } from "../interfaces/product.interface";
import ProductService from "../services/product.service";
import { useSearchParams } from "react-router-dom";

const ProductList = () => {
  const [allProducts, setAllProducts] = useState<IProducts[]>([]);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [hasAnyError, setHasAnyError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [categoryParams, setCategoryParams] = useSearchParams();
  const searchQuery = searchParams.get("search");
  const categoryQuery = categoryParams.get("category");

  useEffect(() => {
    const fetchProduct = async () => {
      setIsDataLoading(true);
      try {
        const allProducts = await new ProductService().getProductList();
        setAllProducts(allProducts);
      } catch (error) {
        setHasAnyError(true);
      }
      setIsDataLoading(false);
    };
    fetchProduct();
  }, []);

  function handleChange(event: ChangeEvent<HTMLSelectElement>): void {
    // setSearchParams({search: searchQuery ?? '', category: event.target.value})
    setParams(event.target.value, "category");
  }

  const handleSearch = (text: string) => {
    // setSearchParams( text !== '' ? { search: text, category: categoryQuery ??'' } : {category: categoryQuery ??''} )
    setParams(text, "search");
  };

  const setParams = (filterText: string, type: "category" | "search") => {
    setSearchParams({
      search: type === "search" ? filterText : searchQuery ?? "",
      category: type === "category" ? filterText : categoryQuery ?? "",
    });
  };

  const filterProduct = () => {
    let _allProducts = allProducts ? [...allProducts] : [];
    if (!categoryQuery) {
      _allProducts = allProducts ? [...allProducts] : [];
    } else {
      if (categoryQuery !== "all") {
        _allProducts = _allProducts.filter(
          (each) => each.category === categoryQuery
        );
      } else {
        _allProducts = allProducts ? [...allProducts] : [];
      }
    }

    if (searchQuery && searchQuery !== "") {
      _allProducts = _allProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return _allProducts;
  };

  return (
    <>
      <div className="container">
        <div className="row py-3">
          <div className="row">
            <div className="col-4 mb-2">
              <select
                value={categoryQuery ?? undefined}
                onChange={handleChange}
                className="form-select form-select-md"
              >
                <option value="all">All Product</option>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewelery</option>
                <option value="men's clothing">Men's clothing</option>
                <option value="women's clothing">Women's clothing</option>
              </select>
            </div>
            <div className="col-8 mb-2">
              <input
                className="form-control"
                type="text"
                placeholder="Scerch Product by name.."
                onChange={(e) => handleSearch(e.target.value)}
                value={searchQuery ?? undefined}
              />
            </div>
          </div>

          <div className="row">
            {filterProduct().map((item, index) => {
              return (
                <div className="col-2 my-2" key={index}>
                  <ProductCard product={item} />
                </div>
              );
            })}
          </div>

          {isDataLoading && (
            <div className="m-5">
              <span className="loader"></span>
              <h6 className="m-2" style={{ textAlign: "center" }}>
                Product is loading.....
              </h6>
            </div>
          )}

          {hasAnyError ? "Something went wrong" : ""}
        </div>
      </div>
    </>
  );
};

export default ProductList;
