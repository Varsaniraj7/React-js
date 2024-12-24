import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  balance: 0,
  transactions: [],
};

const moneySlice = createSlice({
  name: 'money',
  initialState,
  reducers: {
    addTransaction(state, action) {
      const newTransaction = {
        id: state.transactions.length + 1,
        type: action.payload.type,
        amount: action.payload.amount,
        description: action.payload.description,
      };

      state.transactions.push(newTransaction);

      if (newTransaction.type === 'income') {
        state.balance += newTransaction.amount;
      } else {
        state.balance -= newTransaction.amount;
      }
    },
    deleteTransaction(state, action) {
      const transactionIndex = state.transactions.findIndex(
        (transaction) => transaction.id === action.payload
      );

      if (transactionIndex !== -1) {
        const transaction = state.transactions[transactionIndex];
        state.transactions.splice(transactionIndex, 1);

        if (transaction.type === 'income') {
          state.balance -= transaction.amount;
        } else {
          state.balance += transaction.amount;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase('RESET_TRANSACTIONS', (state) => {
      state.transactions = [];
      state.balance = 0;
    });
  },
});

export const { addTransaction, deleteTransaction } = moneySlice.actions;
export default moneySlice.reducer;
