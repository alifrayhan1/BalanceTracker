import React, { useState } from "react";

export default function AddTransaction({ addTransaction }) {
  const [text, setText] = useState("");

  const [amount, setAmount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "" || parseFloat(amount) === 0) return;
    addTransaction({
      id: Math.random(),
      text: text.trim(),
      amount: parseFloat(amount),
    });
    setText("");
    setAmount(0)
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center my-10">
        <form onSubmit={handleSubmit}>
          <input
            className="rounded p-1 block w-full border-2 border-black"
            type="text"
            placeholder="write balance history"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            className="rounded p-1 my-5 block w-full border-2 border-black"
            type="number"
            placeholder="track your balance"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button
            className="rounded p-1 text-white font-bold block bg-violet-600 w-full"
            type="submit"
          >
            Add Transaction
          </button>
        </form>
      </div>
    </>
  );
}
