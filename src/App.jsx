import React, { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import History from "./components/History";
import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  const cashIn = transactions
    .filter((t) => t.type === "Cash In")
    .reduce((sum, t) => sum + t.amount, 0);
  const cashOut = transactions
    .filter((t) => t.type === "Cash Out")
    .reduce((sum, t) => sum + t.amount, 0);
  const balance = cashIn - cashOut;

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex gap-4 app-container ">
      <div className="flex-1 space-y-4">
        <Header cashIn={cashIn} cashOut={cashOut} balance={balance} />
        <Body addTransaction={addTransaction} />
        <History transactions={transactions} />
      </div>
    </div>
  );
};

export default App;
