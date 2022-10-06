import React, { ReactElement } from 'react'
import Head from 'next/head'
import NavbarMenu from './NavbarMenu'
interface Props {
    
}

export default function Header({}: Props): ReactElement {
    return (
      <>
        <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<NavbarMenu/>
      </>
    )
}
