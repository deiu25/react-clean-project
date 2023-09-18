import React from 'react'
import { Header } from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

export const Home = ({children}) => {
  return (
    <>
    <Header />
    <div className='--pad' style={{minHeight: "80vh"}}>
        {children}
    </div>
    <Footer />
    </>
  )
}
