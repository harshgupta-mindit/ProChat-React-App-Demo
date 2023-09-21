import React, { useState } from 'react';
import "./SingleProduct.css";
import { useParams } from "react-router-dom"

import { DATA } from "../../Data"

const SingleProduct = () => {

    const { productID } = useParams();

    const [productImageCarouselCount, setProductImageCarouselCount] = useState(0);

    const productData = DATA.PRODUCT_DATA[productID]

    const changeCarouselImage = (index) => {
        setProductImageCarouselCount(index);
    }

    return (
        <>
            <div className="singleProduct-main">
                <div className="singleProduct-body">
                    <div className="singleProduct-div-img">
                        <img className='singleProduct-img' src={productData.images[productImageCarouselCount]} alt="product_image" />

                        <div className="singleProduct-div-list-img">
                            {
                                productData.images.length > 0 && productData.images.map((imageURL, key) => {
                                    return (
                                        <img onClick={() => changeCarouselImage(key)} src={imageURL} alt="product_image" className="singleProduct-img-thumbnail" />
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="singleProduct-info">
                        <h1 className='singleProduct-info-h1'>{productData.title}</h1>
                        <p className='singleProduct-info-p-1'>{productData.description}</p>
                        <p className='singleProduct-info-p-2'>Rs. {productData.price}</p>
                        <button className='singleProduct-info-btn'>Add to Cart</button>
                    </div>
                </div>


                {/* // Other Product Show */}
                <div className="otherProductList-main">
                    <h1 className='otherProduct-heading'>You may also like </h1>
                    <div className="otherProductList-body">
                        {
                            DATA.PRODUCT_DATA.length > 0 && DATA.PRODUCT_DATA.map((data) => {
                                return (
                                    <div className="product-detail">
                                        <img className='otherProduct-img' src={data.thumbnail} alt="" />
                                        <p className='otherProduct-title'>{data.title}</p>
                                        <p className='otherProduct-price'>Rs.{data.price}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct