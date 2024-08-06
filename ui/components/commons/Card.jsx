import React from 'react'

export default function Card({children, size = 'small'}) {
  return (
    <div className='p-4 rounded-lg w-90 hover:border-4 border-amber-600'>{children}</div>
  )
}
