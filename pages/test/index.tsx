import  React from 'react'
import Cart from '../../components/Cart'
  import {useState} from 'react'
type Props = {}
interface Cryptos{
   
    name:string, 
    price: number,
}
const initCryptos:Cryptos[]=
[
  {name:'Hep', price:8000},  
  {name:'Hello', price:10999}
]

function Test({}: Props) {
const   [name, setName]=React.useState('')
const   [price, setPrice]=React.useState(0)
const   [cryptos, setCrypto]= React.useState(initCryptos)

const onChangeName=(event: React.ChangeEvent<HTMLInputElement>)=> 
{
  setName(event.target.value)
 // console.log('Name: ',name)
} 


const onChangePrice=(event: React.ChangeEvent<HTMLInputElement>)=> 
{
  setPrice(Number(event.target.value))
  //console.log('Price: ',price)
} 

const onSummit =(event: React.FormEvent<HTMLFormElement>)=>{
event.preventDefault()
const crypto={
  name,price
}
console.log('crypto')
console.log(crypto)

//cryptos.push(crypto)
if(name!=='')
{
  setCrypto([...cryptos,crypto])
}
console.log('cryptos')
console.log(cryptos)
setName('')
setPrice(0)

}





  return (
   <>
   <div className='bg-gray-500'>
   <div className='grid'>
   <label  htmlFor='txtName'> Name   </label>

   <input  onChange={onChangeName} id="txtName" name="txtName" type="text"></input>
   </div>
   <div className='grid'>
   <label  htmlFor='txtPrice'> Price   </label>
   <input onChange={onChangePrice} id="txtPrice" name="txtPrice" type="text"></input>
   </div>
<button onClick={onSummit}>
Add
</button>
   </div>
   

   <div className='p-2  grid grid-cols-4  md:grid-cols-2  bg-slate-600'>
    
   { 
cryptos.map((crypt,index)=>
(
<Cart key={index} price={crypt.price} name={crypt.name} />
))

   
   } 
   </div>
   </>
  )
}

export default Test