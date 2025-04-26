import React from 'react';
import './CardContainer.css'
import About from '../About/About';
import Card from '../card/card';


const CarfContener = ({handleIsActiveState , isActive}) => {
    //console.log(isActive)
    return (
        <div>
            <h2>CardContainer</h2>
            <div className='flex gap-10'>
            <div onClick={() => handleIsActiveState("card")}className={`${isActive.card?" btn active":"btn "}`}>CART</div>
            <div onClick={() =>handleIsActiveState("About")}className={`${isActive.card?"btn ":" active btn "}`}> ABOUT</div>
        </div>
      {isActive.card ? <Card></Card>:
       
       <About></About>}
        
        </div>
    );
};


export default CarfContener;