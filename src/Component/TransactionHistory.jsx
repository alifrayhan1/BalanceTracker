   import React from 'react'
   
   export default function TransactionHistory({history}) {
     return (
        <>
            <ul className='text-center'>
                {history.map((transaction)=>(
                    <li key={Math.random()} className={`my-2 flex justify-around ${transaction.amount > 0 ? "bg-green-100" : "bg-red-100"}`}>
                        {transaction.text}
                        <span>{transaction.amount}</span>
                    </li>
                ))}
            </ul>
        </>
    )
   };
   