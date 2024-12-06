import React from "react";
import './History.css';

const History = ({ transactions }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md history">
      <h3 className="text-lg font-bold mb-2">Transaction History</h3>
      <div className="space-y-2">
        {transactions.length ? (
          transactions.map((transaction, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-2 border rounded-lg transaction-item"
            >
              <div>
                <strong>{transaction.type}</strong> - {transaction.category}
              </div>
              <div className="transaction-amount">${transaction.amount}</div>
              <div className="text-sm text-gray-500 transaction-timestamp">{transaction.timestamp}</div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No transactions yet.</p>
        )}
      </div>
    </div>
  );
};

export default History;
