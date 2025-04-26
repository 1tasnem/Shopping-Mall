
import { useState } from 'react'
import './App.css'
import AllProducts from './components/AllProducts/AllProducts'
import CarfContener from './components/CardContainer/CardContainer'
import Navbar from './components/Header/Navbar'

function App() {
  const [isActive,setIsActive] = useState({
    cart:true,
    status:"active",
  })
 //console.log(isactive)
 const handleIsActiveState = (status) =>{
  if(status == 'card')
  {
    setIsActive({
      cart:true,
      status:"card",
    })
  }
  else{
    setIsActive({
      cart:false,
      status:"about",
    })

  }
 }
 //console.log(isActive)
  return (
    <>
      
        
      
      <Navbar></Navbar> 
      <div className='flex'>
      <AllProducts></AllProducts> 
      <CarfContener handleIsActiveState = {handleIsActiveState}></CarfContener>
      
      
</div>
    </>
  )
}

export default App
