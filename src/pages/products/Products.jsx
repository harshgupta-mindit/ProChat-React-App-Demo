import React from 'react';
import "./Products.css";

import ProductCard from '../../components/product_card/ProductCard';

// HARD CODED DATA
import { DATA } from "../../Data";

const Products = () => {

  console.log(DATA.PRODUCT_DATA)

  return (
    <>
      <h1>Product Page</h1>

      <div className="product-list">

        {
          DATA.PRODUCT_DATA.map((data) => {
            return (
              <ProductCard productBrand={data.brand} productImage={data.thumbnail} productPrice={data.price} productModel={data.description} />
            )
          })
        }
      </div>

    </>
  )
}

export default Products