import 'bootstrap/dist/css/bootstrap.min.css'
import { useState,useEffect } from 'react'
import { NextPage } from 'next'
import axios from 'axios'
export const config = { amp: true }

const Home:NextPage = () => {
  const[price,setPrice]= useState(1)
  const[name,setName]= useState("No data")
const nextValues=()=>
{
  setPrice(price+1)
}

useEffect(  (): void=>
{
  const getData=async (): Promise<void>=>{
  
    const {data} =await axios.get("/api/hello")
  
 setName(data.name)
  



  }
  getData()
   
 
} ,[]
)

useEffect((): void=>
{
console.log("price", price)
},[price]
)
  return (
    <>
<div>price: {price}</div>
<div>Name: {name}</div>
    <button onClick={nextValues}>
      Click
    </button>
    </>
       
  )
}

export default Home