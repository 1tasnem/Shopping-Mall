import React from 'react';
import './CardContainer.css'

const CarfContener = ({handleIsActiveState}) => {
    return (
        <div>
            <h2>CardContainer</h2>
            <div className='flex gap-10'>
            <div onClick={() => handleIsActiveState("card")}className='cart-btn btn'>CART</div>
            <div onClick={() =>handleIsActiveState("About")}className='about btn'> ABOUT</div>
        </div>
        </div>
    );
};

export default CarfContener;