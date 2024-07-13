import React from 'react';
import Expenses from './features/expenses/Expenses';

function App() {
    return (
        <div style={{width: '60%', margin: 'auto'}}>
            <h1> Your Expenses </h1>
            <Expenses />
        </div>
    );
}

export default App;
