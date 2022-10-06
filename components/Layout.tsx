import React, { ReactElement } from 'react'
import Header from './Header'
import Footer from './Footer'
type Props = {children:React.ReactNode}

function Layout({children}: Props):React.ReactElement 
 {
  return (  
  <>
  <Header/>
    <main>
      {children}
    </main>
    <Footer/>
    </>     
  )
}

export default Layout