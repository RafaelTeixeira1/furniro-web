import React from 'react'
import ShopBar from '../components/common/ShopBar' 
import { ProductGrid } from '../components/common/ProductGrid'


const ShopPage = () => {
  return (
    <div>
    <ShopBar breadcrumb={['Home', 'Shop']} />
 
    </div>
  )
}

export default ShopPage