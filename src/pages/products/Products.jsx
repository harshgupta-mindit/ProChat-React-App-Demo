import React, { useState } from 'react';
import "./Products.css";

import ProductCard from '../../components/product_card/ProductCard';

import {BiSearch} from "react-icons/bi";

// HARD CODED DATA
import { DATA } from "../../Data";
import { Link, Outlet } from 'react-router-dom';

const Products = () => {

  console.log(DATA.PRODUCT_DATA)

  const [searchInput, setSearchInput] = useState("");

  // SCROLL TO TOP
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };


  const searchProductFunc = (e) => {
    console.log("product search Clicked");
    e.preventDefault();
  }

  return (
    <>

    {/* // ---/products/:productID */}
    <Outlet/>

      <div className="products-main">

        <h1 style={{color:"#D80032"}}>Products</h1>

        <div className="search-div">
          <form className='product-search-form' onSubmit={searchProductFunc}>
            <label className='products-search-label' htmlFor="searchBar"><input onChange={(e)=> setSearchInput(e.target.value)} className='products-search-input' id="searchBar" type="text" /> <BiSearch style={{fontSize:"30px"}} color='#D80032'/></label>
          </form>
        </div>

        <div className="product-list">

          {
            DATA.PRODUCT_DATA.filter(
              (data)=> {return data.title.toLowerCase().includes(searchInput.toLowerCase()) || data.brand.toLowerCase().includes(searchInput.toLowerCase()) || data.description.toLowerCase().includes(searchInput.toLowerCase())}
            ).map((data, key) => {
              return (
                <Link onClick={scrollToTop} key={key} to={`/products/${key}`} style={{textDecoration:"none", color:"#000"}}>
                  <ProductCard productBrand={data.brand} productTitle={data.title} productImage={data.thumbnail} productPrice={data.price} productModel={data.description} />
                </Link>
              )
            })
          }
        </div>

      </div>
    </>
  )
}

export default Products