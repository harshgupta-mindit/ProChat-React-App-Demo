import React, { useState } from 'react';
import "./Products.css";

import ProductCard from '../../components/product_card/ProductCard';

import { BiSearch } from "react-icons/bi";

// HARD CODED DATA
import { DATA } from "../../Data";
import { Link, Outlet } from 'react-router-dom';

const Products = () => {

  console.log(DATA.PRODUCT_DATA);

  const [searchInput, setSearchInput] = useState("");

  // FILTERS STATES
  const [dropdownFIlter, setDropdownFilter] = useState("");
  const [rangeFilter, setRangeFilter] = useState(1000000);
  const [ratingFilter, setRatingFilter] = useState(0);


  // SCROLL TO TOP
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };


  console.log("all filter", dropdownFIlter, rangeFilter, ratingFilter)

  const searchProductFunc = (e) => {
    console.log("product search Clicked");
    e.preventDefault();
  }

  return (
    <>

      {/* // ---/products/:productID */}
      <Outlet />

      <div className="products-main">

        <h1 style={{ color: "#D80032" }}>Products</h1>

        <div className="search-div">
          <form className='product-search-form' onSubmit={searchProductFunc}>
            <label className='products-search-label' htmlFor="searchBar"><input onChange={(e) => setSearchInput(e.target.value)} className='products-search-input' id="searchBar" type="text" /> <BiSearch style={{ fontSize: "30px" }} color='#D80032' /></label>
          </form>
        </div>

        <div className="products-body">

          <div className="products-filters">
            <p style={{ fontSize: '20px', color: "#D80032" }}>Products Filters</p>

            <div className="products-filters-body">
              {/* Dropdown Filter */}
              <div className="products-filter-dropdown">
                <select onChange={e => setDropdownFilter(e.target.value)} defaultValue={""} className='products-filter-select' name="" id="" >
                  <option value="">All Brands</option>
                  {
                    DATA.PRODUCT_DATA.map((data, key) => {
                      return <option key={key} value={data.brand} style={{backgroundColor:"#D80032", color:"#fff"}}>{data.brand}</option>
                    })
                  }
                </select>
              </div>
              {/* Price Range Filter */}
              <div className='products-filter-range'>
                <label htmlFor="">Price Range</label>
                <input onChange={e => setRangeFilter(e.target.value)} style={{backgroundColor:"#D80032", color:"#fff"}} type="range" name="" id="" step="100" min="10" max="2000" />
                <p>Rs. {rangeFilter}</p>
              </div>

              <div className="product-filter-radio">
                <p className='product-filter-radio-p'>Filter by Rating</p>
                <label htmlFor="radio1">
                  <input onClick={e => setRatingFilter(e.target.value)} type="radio" name="star" id="radio1" value="1" />
                  ⭐
                </label>
                <label htmlFor="radio2">
                  <input onClick={e => setRatingFilter(e.target.value)} type="radio" name="star" id="radio2" value="2" />
                  ⭐⭐
                </label>
                <label htmlFor="radio3">
                  <input onClick={e => setRatingFilter(e.target.value)} type="radio" name="star" id="radio3" value="3" />
                  ⭐⭐⭐
                </label>
                <label htmlFor="radio4">
                  <input onClick={e => setRatingFilter(e.target.value)} type="radio" name="star" id="radio4" value="4" />
                  ⭐⭐⭐⭐
                </label>
                <label htmlFor="radio5">
                  <input onClick={e => setRatingFilter(e.target.value)} type="radio" name="star" id="radio5" value="5" />
                  ⭐⭐⭐⭐⭐
                </label>
              </div>

              <button style={{ border: "none", padding: "10px 20px", backgroundColor: "#D80032", color: "#fff", borderRadius: "10px", marginTop:"20px" }} onClick={(e) => { setDropdownFilter(""); setRangeFilter(100000); setRatingFilter(0) }}>Reset</button>
            </div>

          </div>

          <div className="product-list">

            {
              DATA.PRODUCT_DATA.filter(
                (data) => { return (data.title.toLowerCase().includes(searchInput.toLowerCase()) || data.brand.toLowerCase().includes(searchInput.toLowerCase()) || data.description.toLowerCase().includes(searchInput.toLowerCase())) }
              )
                .filter((data) => {
                  return (data.brand.toLowerCase().includes(dropdownFIlter.toLowerCase()))
                })
                .filter((data) => {
                  return (data.price < rangeFilter)
                })
                .filter((data) => {
                  return (data.rating > ratingFilter)
                })
                .map((data, key) => {
                  return (
                    <Link onClick={scrollToTop} key={key} to={`/products/${key}`} style={{ textDecoration: "none", color: "#000" }}>
                      <ProductCard productBrand={data.brand} productTitle={data.title} productImage={data.thumbnail} productPrice={data.price} productModel={data.description} />
                    </Link>
                  )
                })
            }
          </div>

        </div>


      </div>
    </>
  )
}

export default Products