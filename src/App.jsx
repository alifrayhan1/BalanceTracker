import "./App.css";
import Header from "./Component/Header";
import Balance from "./Component/Balance";
import { useState } from "react";
import AddTransaction from "./Component/AddTransaction";
import IncomeExpense from "./Component/IncomeExpense";
import TransactionHistory from "./Component/TransactionHistory"

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransactionHistory = (transaction) => {
    setTransactions([...transactions, transaction]);
  };
  const calculatedBalance = () => {
    return transactions.reduce(
      (acc, transaction) => acc + transaction.amount,
      0
    );
  };
  const calculateIncome = () => {
    return transactions
      .filter((transaction) => transaction.amount > 0)
      .reduce((acc, transaction) => acc + transaction.amount, 0);
  };
  const calculateExpense = () => {
    return transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => acc + transaction.amount, 0);
  };

  return (
    <>
      <Header />
      <Balance balance={calculatedBalance()} />
      <IncomeExpense income={calculateIncome()} expense={calculateExpense()} />
      <AddTransaction addTransaction={addTransactionHistory}/>
      <TransactionHistory history={transactions}/>
    </>
  );
}

export default App;
