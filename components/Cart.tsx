//tsrfce
 import React from 'react'
 
 type Props = { price: number,
    name:string}
 
 function Cart({price, name}: Props) {
   return (
     <>
      <div className='bg-gray-200 ' >
    <div className='text-black max-w-xs my-auto mx-auto bg-gradient-to-r from-blue-900 to-blue-500 p-4 py-5 px-5 rounded-xl'>
         {name}: 
         {price}
         
    </div>
</div>
     </>
   )
 }
 
 export default Cart