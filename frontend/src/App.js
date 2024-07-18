import React from 'react';
import Expenses from './features/expenses/Expenses';
import ExpensesForm from './features/expenses/ExpensesForm'

function App() {
    return (
        <div style={{width: '60%', margin: 'auto'}}>
            <h1> Your Expenses </h1>
            <ExpensesForm />
            <Expenses />
        </div>
    );
}

export default App;
