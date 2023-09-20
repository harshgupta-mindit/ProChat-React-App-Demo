import React from 'react';
import "./ProductCard.css";

const ProductCard = ({productBrand, productImage, productPrice, productModel }) => {
  return (
    <>
        <div className="card-main">
            <div className="card-body">
                <img src={productImage} alt="" className="card-img" />

                <div className="card-info">
                    <p>{productBrand}</p>
                    <p>{productModel}</p>
                    <p>{productPrice}</p>
                </div>

                {/* <button className='card-add-btn'>Add to Cart</button> */}
                <button className='card-remove-btn'>Remove from Cart</button>
            </div>
        </div>
    </>
  )
}

export default ProductCard