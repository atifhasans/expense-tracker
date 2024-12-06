import React, { useState } from "react";
import './Body.css';

const cashOutCategories = [
  "Groceries",
  "Fuel",
  "Food/Drink",
  "Car/Bike",
  "Taxi",
  "Clothes",
  "Shopping",
  "Entertainment",
  "Electricity",
];

const cashInCategories = ["Salary", "Business", "Investment", "Loan"];

const Body = ({ addTransaction }) => {
  const [amount, setAmount] = useState("");
  const [cashType, setCashType] = useState("Cash In");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && category) {
      addTransaction({
        amount: parseFloat(amount),
        type: cashType,
        category,
        timestamp: new Date().toLocaleString(),
      });
      setAmount("");
      setCategory("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md space-y-4 body-form">
      <div className="flex gap-2">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="flex-1 p-2 border rounded-lg"
          required
        />
        <select
          value={cashType}
          onChange={(e) => setCashType(e.target.value)}
          className="flex-1 p-2 border rounded-lg"
        >
          <option value="Cash In">Cash In</option>
          <option value="Cash Out">Cash Out</option>
        </select>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="flex-1 p-2 border rounded-lg"
          required
        >
          <option value="" disabled>
            Select category
          </option>
          {(cashType === "Cash In" ? cashInCategories : cashOutCategories).map(
            (cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            )
          )}
        </select>
      </div>
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-lg">
        Add Transaction
      </button>
    </form>
  );
};

export default Body;
