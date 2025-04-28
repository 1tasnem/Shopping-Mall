import React from 'react';
import './CardContainer.css'
import About from '../About/About';
import Card from '../card/card';


const CarfContener = ({handleIsActiveState , isActive,selectedProducts,handleDelete}) => {
    //console.log(isActive)
    return (
        <div>
           
            <div className='flex gap-10 m-10'>
            <div onClick={() => handleIsActiveState("card")}className={`${isActive.card?" btn active":"btn "}`}>CART</div>
            <div onClick={() =>handleIsActiveState("About")}className={`${isActive.card?"btn ":" active btn "}`}> ABOUT</div>
        </div>
      {isActive.card ? <Card selectedProducts={selectedProducts} handleDelete={handleDelete}></Card>:
       
       <About></About>}
        
        </div>
    );
};


export default CarfContener;