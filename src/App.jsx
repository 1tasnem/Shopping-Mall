
import { useState } from 'react'
import './App.css'
import AllProducts from './components/AllProducts/AllProducts'
import CarfContener from './components/CardContainer/CardContainer'
import Navbar from './components/Header/Navbar'

function App() {
  const [isActive,setIsActive] = useState({
    card:true,
    status:"active",
  })
 //console.log(isactive)
 const handleIsActiveState = (status) =>{
  if(status == 'card')
  {
    setIsActive({
      card:true,
      status:"card",
    })
  }
  else{
    setIsActive({
      card:false,
      status:"about",
    })

  }
 }
 //console.log(isActive)
const [selectedProducts,setSelectedProducts] = useState([]);

const handleSelectedProduct = (product) =>{
const isexist = selectedProducts.find((p) => p.id == product.id)
  //console.log(product);
  if(isexist){
    alert("Already Added")
  }
  else{
   // console.log("naiiiii")
   handleIncreasePrice(product.price);
    const newProducts = [...selectedProducts,product]
    setSelectedProducts(newProducts);
  }
 
}
//console.log(selectedProducts)


const handleDelete = (id)=>{
  handleDeletePrice(id);

  const newProduct = selectedProducts.filter ((p) => p.id != id);
    setSelectedProducts(newProduct);

}
 const [price ,setPrice] =useState(500);
 const handleIncreasePrice = (pr) =>
 {
setPrice(price+pr);
 }
 const handleDeletePrice = (id) =>
 {
  const product = selectedProducts.find((p) => p.id == id);
  setPrice(price-product.price)

 }

  return (
    <>
      
        
      
      <Navbar price = {price} selectedProducts={selectedProducts}></Navbar> 
      <div className='flex'>
      <AllProducts handleSelectedProduct={handleSelectedProduct}></AllProducts> 
    <CarfContener handleDelete={handleDelete} selectedProducts={selectedProducts} isActive={isActive} handleIsActiveState = {handleIsActiveState}></CarfContener>
      
      
</div>
    </>
  )
}

export default App
