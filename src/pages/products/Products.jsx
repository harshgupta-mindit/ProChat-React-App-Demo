import React from 'react';
import "./Products.css";

import ProductCard from '../../components/product_card/ProductCard';

// HARD CODED DATA
import { DATA } from "../../Data";
import { Link } from 'react-router-dom';

const Products = () => {

  console.log(DATA.PRODUCT_DATA)

  return (
    <>
      <div className="products-main">

        <h1>Product Page</h1>

        <div className="product-list">

          {
            DATA.PRODUCT_DATA.map((data, key) => {
              return (
                <Link key={key} to={`/products/${key}`} style={{textDecoration:"none", color:"#000"}}>
                  <ProductCard productBrand={data.brand} productImage={data.thumbnail} productPrice={data.price} productModel={data.description} />
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