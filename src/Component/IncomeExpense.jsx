import React from 'react'

export default function IncomeExpense({income, expense}) {
  return (
    <>
      <div className='flex justify-around'>
        <div className='text-green-600'>
          <h1>Income</h1>
          <h1>{income}</h1>
        </div>
        <div className='text-red-600'>
          <h1>Expense</h1>
          <h1>{expense}</h1>
        </div>
      </div>
    </>

  )
};


