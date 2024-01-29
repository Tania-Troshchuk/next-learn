import React, { Fragment } from 'react'
import AddToCard from './AddToCard'
// import styles from './ProductCard.module.css' // name styles is make sense as it is referense to JS styles object

const ProductCard = () => {
  return (
    <Fragment>
      <div className='p-1 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500 cursor-pointerf'>ProductCard</div>
      <AddToCard />
    </Fragment>
  )
}

export default ProductCard