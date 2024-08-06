import React from 'react'

export default function CardsHolder({name, children}) {
  return (
    <div className='w-6/12'>
        <h4 className='font-medium text-xl mb-4 text-amber-700'>{name}</h4>
        <div>
            {children}
        </div>
    </div>
  )
}
