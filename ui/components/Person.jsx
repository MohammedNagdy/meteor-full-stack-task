import React from 'react'

export default function Person({personData, checkStatus, delayed = '', onCheckButtonClick}) {
    // Handle the check out and the check in
    const check = checkStatus? 'out': 'in'
  return (
    <div className='w-84 p-1.5 flex justify-between m-1.5 rounded-lg border-2 border-amber-500'>
        <div>
            {personData?.firstName && (
                <p>First Name: {personData?.firstName}</p>
            )}
            {personData?.lastName && (
                <p>Last Name: {personData?.lastName}</p>
            )}
            <p>{personData?.title && (
                <>Position: {personData?.title}</>
            )}
            {personData?.companyName && (
                <> @ {personData?.companyName}</>
            )}</p>
            {personData?.checkInDateTime && (
                <p>Check-in Date: {personData?.checkInDateTime}</p>
            )}
            {personData?.checkOutDateTime && (
                <p>Check-out Date: {personData?.checkOutDateTime}</p>
            )}
        </div>
        {delayed !== personData._id  && <button className='w-28 h-10 self-center text-white hover:text-slate-400 bg-amber-950 rounded' onClick={onCheckButtonClick}>Check {check}</button>}
    </div>
  )
}
