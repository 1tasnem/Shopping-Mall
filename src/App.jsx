
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
  return (
    <>
      
        
      
      <Navbar></Navbar> 
      <div className='flex'>
      <AllProducts></AllProducts> 
      <CarfContener isActive={isActive} handleIsActiveState = {handleIsActiveState}></CarfContener>
      
      
</div>
    </>
  )
}

export default App
