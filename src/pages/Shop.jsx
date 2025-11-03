import React from 'react'
import { Hero } from '../components/Hero/Hero'
import { Popular } from '../components/Popular/Popular.jsx'
import { Offers } from '../components/Offers/Offers.jsx'

export const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
    </div>
  )
}

export default Shop