import React, { useState } from "react";

export default function MoneyManager() {
    // const [transactions, setTransactions] = useState([]);
    // const [incomeAmount, setIncomeAmount] = useState("");
    // const [incomeDescription, setIncomeDescription] = useState("");
    // const [expenseAmount, setExpenseAmount] = useState("");
    // const [expenseDescription, setExpenseDescription] = useState("");

    // const handleAddIncome = () => {
    //     if (incomeAmount && incomeDescription) {
    //         setTransactions([
    //             ...transactions,
    //             { id: Date.now(), amount: parseFloat(incomeAmount), description: incomeDescription, type: "income" },
    //         ]);
    //         setIncomeAmount("");
    //         setIncomeDescription("");
    //     }
    // };

    // const handleAddExpense = () => {
    //     if (expenseAmount && expenseDescription) {
    //         setTransactions([
    //             ...transactions,
    //             { id: Date.now(), amount: parseFloat(expenseAmount), description: expenseDescription, type: "expense" },
    //         ]);
    //         setExpenseAmount("");
    //         setExpenseDescription("");
    //     }
    // };

    // const calculateBalance = () => {
    //     return transactions.reduce((acc, transaction) => {
    //         return transaction.type === "income"
    //             ? acc + transaction.amount
    //             : acc - transaction.amount;
    //     }, 0);
    // };
    const [isButtonVisible, setIsButtonVisible] = useState(true);
    const [income, setIncome] = useState(0);
    const [inputIncome, setInputIncome] = useState("");
  
    // Function to handle button click
    const handleAddBalance = () => {
      setIsButtonVisible(false); // Hide button and show the div
    };
  
    // Function to handle the input and add income
    const handleAddIncome = () => {
      const additionalIncome = parseInt(inputIncome, 10);
      if (!isNaN(additionalIncome)) {
        setIncome(income + additionalIncome); // Add entered income
        setInputIncome(""); // Clear input field
        setIsButtonVisible(true); // Show the button again
      }
    };
    return (
        // <div>MoneyManager</div>
        // <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        //     <h1 className="text-2xl font-bold mb-4 text-center">Money Manager</h1>
        //     <div className="bg-white p-6 rounded-lg flex justify-around  shadow-md w-full">


        //         <div className="w-[40%] bg-yellow-100">
        //             {/* Balance Display */}
        //             <div className="bg-blue-100 text-blue-800 p-4 rounded-md mb-6">
        //                 <h2 className="text-lg font-semibold">Total Balance</h2>
        //                 <p className="text-2xl font-bold">${calculateBalance().toFixed(2)}</p>
        //             </div>

        //             {/* Add Money Section */}
        //             <div className="mb-6">
        //                 <h2 className="text-lg font-semibold mb-4">Add Money</h2>
        //                 <div className="space-y-4">
        //                     <div>
        //                         <label className="block text-sm font-medium">Description</label>
        //                         <input
        //                             type="text"
        //                             value={incomeDescription}
        //                             onChange={(e) => setIncomeDescription(e.target.value)}
        //                             className="w-full border border-gray-300 rounded-md p-2 mt-1"
        //                             placeholder="e.g., Salary"
        //                         />
        //                     </div>
        //                     <div>
        //                         <label className="block text-sm font-medium">Amount</label>
        //                         <input
        //                             type="number"
        //                             value={incomeAmount}
        //                             onChange={(e) => setIncomeAmount(e.target.value)}
        //                             className="w-full border border-gray-300 rounded-md p-2 mt-1"
        //                             placeholder="e.g., 500"
        //                         />
        //                     </div>
        //                     <button
        //                         onClick={handleAddIncome}
        //                         className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
        //                     >
        //                         Add Money
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className="w-[40%] bg-red-100">
        //             {/* Add Expense Section */}
        //             <div className="mb-6">
        //                 <h2 className="text-lg font-semibold mb-4">Expense Money</h2>
        //                 <div className="space-y-4">
        //                     <div>
        //                         <label className="block text-sm font-medium">Description</label>
        //                         <input
        //                             type="text"
        //                             value={expenseDescription}
        //                             onChange={(e) => setExpenseDescription(e.target.value)}
        //                             className="w-full border border-gray-300 rounded-md p-2 mt-1"
        //                             placeholder="e.g., Grocery"
        //                         />
        //                     </div>
        //                     <div>
        //                         <label className="block text-sm font-medium">Amount</label>
        //                         <input
        //                             type="number"
        //                             value={expenseAmount}
        //                             onChange={(e) => setExpenseAmount(e.target.value)}
        //                             className="w-full border border-gray-300 rounded-md p-2 mt-1"
        //                             placeholder="e.g., 100"
        //                         />
        //                     </div>
        //                     <button
        //                         onClick={handleAddExpense}
        //                         className="w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
        //                     >
        //                         Add Expense
        //                     </button>
        //                 </div>
        //             </div>

        //             {/* Transaction List */}
        //             <div>
        //                 <h2 className="text-lg font-semibold mb-2">Transactions</h2>
        //                 <ul className="space-y-2">
        //                     {transactions.map((transaction) => (
        //                         <li
        //                             key={transaction.id}
        //                             className={`p-3 rounded-md flex justify-between ${transaction.type === "income"
        //                                 ? "bg-green-100 text-green-800"
        //                                 : "bg-red-100 text-red-800"
        //                                 }`}
        //                         >
        //                             <span>{transaction.description}</span>
        //                             <span>
        //                                 {transaction.type === "income" ? "+" : "-"}$
        //                                 {transaction.amount.toFixed(2)}
        //                             </span>
        //                         </li>
        //                     ))}
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <>
            <div className="w-full flex flex-col items-center h-[100vh] bg-[#131310]">
                <div className="text-white text-center font-extrabold text-[48px]">
                    <h1>Money Manager</h1>
                </div>
                <div className="w-[90%] h-[400px] flex justify-between border border-red-300">
                    <div className="w-[45%] h-full flex justify-center items-center border border-green-400">
                    {isButtonVisible ? (
        <button
          onClick={handleAddBalance}
          className="w-[200px] h-[200px] flex flex-col justify-center items-center bg-[#ff60ff] rounded-full"
        >
          <h1>Add Balance</h1>
          <h1>Rs {income}</h1>
        </button>
      ) : (
        <div
          className="w-[200px] h-[200px] flex flex-col justify-center items-center rounded-full bg-[#ff60ff] text-center opacity-1 animate-fadeIn"
        >
          <input
            type="number"
            placeholder="Enter Income"
            value={inputIncome}
            onChange={(e) => setInputIncome(e.target.value)}
            className="mb-2 w-[90%] p-1 border rounded"
          />
          <button
            onClick={handleAddIncome}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>
      )}
                    </div>
                    <div className="w-[45%] h-full border border-green-400"></div>
                </div>
            </div>
        </>
    )
}




