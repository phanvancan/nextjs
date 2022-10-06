
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import  Layout  from '../components/Layout'
import { useEffect } from "react";
import {Provider} from 'react-redux' 
import type {AppProds} from 'next/app' 

function MyApp({ Component, pageProps }:AppProds )
{
  return (
  <>
   
  <Layout>
    <Component {...pageProps} />
  </Layout>
   
  </>)
     
    
}

export default MyApp
