import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTransaction, deleteTransaction } from '../features/moneySlice';

const MoneyManager = () => {
  const dispatch = useDispatch();
  const { balance, transactions } = useSelector((state) => state.money);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('income');

  const handleAddTransaction = () => {
    if (!description || amount <= 0) {
      alert('Please provide a valid description and amount.');
      return;
    }

    dispatch(
      addTransaction({
        type,
        amount,
        description,
      })
    );

    setDescription('');
    setAmount(0);
    setType('income');
  };

  const handleDeleteTransaction = (id) => {
    dispatch(deleteTransaction(id));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-6 text-indigo-600">Money Manager</h1>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold">Current Balance: 
          <span className={balance >= 0 ? 'text-green-500' : 'text-red-500'}> ${balance}</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Add Transaction Form */}
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h3 className="text-2xl font-bold mb-4">Add a Transaction</h3>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
              <select
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter a description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
              <input
                type="number"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter an amount"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
            </div>

            <button
              type="button"
              className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handleAddTransaction}
            >
              Add Transaction
            </button>
          </form>
        </div>

        {/* Transaction History */}
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h3 className="text-2xl font-bold mb-4">Transaction History</h3>
          {transactions.length === 0 ? (
            <p className="text-gray-500">No transactions available. Add a transaction to get started.</p>
          ) : (
            <ul className="divide-y divide-gray-300">
              {transactions.map((transaction) => (
                <li key={transaction.id} className="py-4 flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">{transaction.description}</span>
                  <span
                    className={`text-sm font-medium ${
                      transaction.type === 'income' ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    {transaction.type === 'income' ? '+' : '-'} ${transaction.amount}
                  </span>
                  <button
                    className="text-sm text-red-500 hover:underline"
                    onClick={() => handleDeleteTransaction(transaction.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoneyManager;