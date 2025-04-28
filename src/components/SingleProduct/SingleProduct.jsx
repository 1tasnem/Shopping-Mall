import React from 'react';
import './SingleProduct.css'

const SingleProduct = ({product,handleSelectedProduct}) => {
   // console.log(product);
   //console.log(handleSelectedProduct)
   const {name,image,price,description,isFeature} = product;

    return (
        <div className='card'>
        <img className='img' src ={image} alt =""/>
        <h2 className='font-bold'>{name}</h2>
        <p>{description}</p>
        <div>
            <p>${price}</p>
            <p>{isFeature?"Feature category":"not category"}</p>
        </div>
        <button onClick={() => handleSelectedProduct(product)} class='btn card_button'>Add To Cart</button>

        </div>
    );
};

export default SingleProduct;