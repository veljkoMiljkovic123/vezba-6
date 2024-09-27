import React from 'react'
import { Link } from 'react-router-dom'
function ProductCard({product}) {
  return (
    <div className='flex flex-col items-center justify-center gap-4 border border-slate-400 hover:border-red-500'>
      <img src={product.thumbnail} className='w-[185px] h-[200px] ' alt="" />
      <p>{product.title.substring(0,18)}</p>
      <p>${product.price}</p>
      <Link className='mb-2 px-2 py-1 bg-blue-400' to={`/singleProduct/${product.id}`}>Show more</Link>
    </div>
  )
}

export default ProductCard