import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    expenses: [],
};

export const expensesSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        getExpenses: (state, action) => ({
            ...state,
            expenses: action.payload,
        }),
        putExpenses: (state, action) => ({
            ...state,
            expenses: state.expenses.filter(exp => exp.id !== action.payload.id).push(action.payload),
        }),
        postExpenses: (state, action) => ({
            ...state,
            expenses: [...state.expenses, action.payload]
        }),
        deleteExpenses: (state, action) => ({
            ...state,
            expenses: state.expenses.filter(exp => exp.id !== action.payload.id)
        }),
    },
});

export const { getExpenses, putExpenses, postExpenses, deleteExpenses } = expensesSlice.actions;

export default expensesSlice.reducer;
