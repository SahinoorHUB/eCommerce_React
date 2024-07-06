/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import { useEffect, useState } from "react";
import { IProducts } from "../interfaces/product.interface";
import ProductService from "../services/product.service";
import { Link } from "react-router-dom";



const AutocompleteSearch = () => {
    const [allProducts, setAllProducts] = useState<IProducts[]>([]);
    const [searchKeyWord, setSearchKeyWord] = useState('');

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const allProducts = await new ProductService().getProductList();
                setAllProducts(allProducts);
            } catch (error) {
                setAllProducts([]);
            }
        };
        fetchProduct();
    }, []);

    const handleSearch = (text: string) => {
        setSearchKeyWord(text)
    };

    const filterProduct = () => {
        let _allProducts = allProducts ? [...allProducts] : [];
        if (searchKeyWord && searchKeyWord !== "") {
            _allProducts = _allProducts.filter((product) =>
                product.title.toLowerCase().includes(searchKeyWord.toLowerCase())
            );
        }
        return _allProducts;
    };

    const reset = () => {
        setSearchKeyWord('')
    }


    return (
        <div style={{ position: 'relative' }}>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                    </span>
                </div>
                {searchKeyWord && searchKeyWord.length > 0 && (
                    <div className="bi-x-lg" onClick={reset}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                        </svg>
                    </div>
                )}
                <input type="text" className="form-control search-header" onChange={(e) => handleSearch(e.target.value)} value={searchKeyWord} placeholder="Search for Products, Brands and More" />

            </div>
            {searchKeyWord && searchKeyWord.length > 0 && (
                <div className="autocompleteContainer">
                    {filterProduct().map((item: any, index: number) => {
                        return (
                            <Link key={index} to={`/details/${item.id}`} onClick={reset} className="autoCompliteList">
                                <img className="autoCompliteListImage" src={item.image} />
                                <p>{item.title}</p>
                            </Link>
                        );
                    })}

                    {filterProduct().length === 0 && (
                        <p className="autoCompliteLisnoProductFound">No Product Found</p>
                    )}
                </div>
            )} 
        </div>
    );
};

export default AutocompleteSearch;
