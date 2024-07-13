import React, { useEffect, useState } from 'react';
import { GetExpenses, PutExpense, PostExpense, DeleteExpense } from './expensesApi';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Row, Col } from 'react-bootstrap';


function Expense({ expense }) {
    return (
        <div> 
            <Row> 
                <Col> { expense.desc }  </Col>
                <Col> { expense.price } </Col>
            </Row>
            <hr />
        </div>
    );
}

export default function Expenses() {
    const dispatch = useDispatch();
    const expenses = useSelector((state) => state.expenses.expenses);

    useEffect(() => {
        GetExpenses(dispatch)
    }, [])

    return expenses.map(exp => 
        <div key={exp.id} style={{marginBottom: '1rem'}}> 
            <Expense expense={ exp }/> 
        </div>
    );
}
