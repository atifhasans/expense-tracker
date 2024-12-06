import React from "react";
import './Header.css';

const Header = ({ cashIn, cashOut, balance }) => {
  return (
    <div className="header grid grid-cols-3 gap-2 bg-white p-4 rounded-lg shadow-md text-center">
      <div className="p-2 border rounded-lg header-item">
        <h4 className="text-sm font-semibold">Cash IN</h4>
        <p className="text-lg font-bold text-green-500 cash-in">${cashIn}</p>
      </div>
      <div className="p-2 border rounded-lg header-item">
        <h4 className="text-sm font-semibold">Cash OUT</h4>
        <p className="text-lg font-bold text-red-500 cash-out">${cashOut}</p>
      </div>
      <div className="p-2 border rounded-lg header-item">
        <h4 className="text-sm font-semibold">Balance</h4>
        <p className="text-lg font-bold text-blue-500 balance">${balance}</p>
      </div>
    </div>
  );
};

export default Header;
