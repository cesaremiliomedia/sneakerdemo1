import { mapShoes } from '../../products/shoes/ShoeStoreInfo'
import React from 'react'
import ProductModal from './productModal'

export default function() {
  return (
    <div className="flex">
      {' '}
      {mapShoes.map(shoe => (
        <ProductModal imgUrl={shoe}> </ProductModal>
      ))}
    </div>
  )
}
