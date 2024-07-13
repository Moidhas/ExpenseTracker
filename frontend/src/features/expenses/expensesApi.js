import expensesReducer, { getExpenses, putExpenses, postExpenses, deleteExpenses } from './expensesSlice'

export function GetExpenses(dispatch) {
    // Api call 
    const payload = [ { id: 1, price: 1.01, desc: "yo" },
                { id: 2, price: 500, desc: "PS5" },
                { id: 3, price: 650, desc: "XBOX" } ];
    dispatch(getExpenses(payload));
}

export function PutExpense(dispatch, expense) {
    // Api Call
    dispatch(putExpenses(expense))
}

export function PostExpense(dispatch, expense) {
    // Api Call
    dispatch(postExpenses(expense))
}

export function DeleteExpense(dispatch, expense) {
    // Api Call
    dispatch(deleteExpenses(expense))
}


