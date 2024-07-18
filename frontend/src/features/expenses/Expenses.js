import React, { useEffect, useState } from 'react';
import { GetExpenses, DeleteExpense } from './expensesApi';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Row, Col } from 'react-bootstrap';
import ExpensesForm from './ExpensesForm';


function Expense({ expense }) {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useDispatch();
    const onEdit = () => (setIsEditing(!isEditing));
    return (
        <div> 
            { isEditing ? <ExpensesForm expense={expense} onEdit={onEdit}/>
                : <Row> 
                    <Col> { expense.desc }  </Col>
                    <Col> { expense.price } </Col>
                    <Col> <Button variant='primary' onClick={onEdit}>Edit</Button> </Col>
                    <Col> <Button variant='primary' onClick={() => DeleteExpense(dispatch, expense) }>Delete</Button> </Col>
                </Row>
            }
            <hr />
        </div>
    );
}

export default function Expenses() {
    const dispatch = useDispatch();
    const expenses = useSelector((state) => state.expenses.expenses);

    useEffect(() => {
        GetExpenses(dispatch);
    }, [])

    return expenses.map(exp => 
        <div key={exp.id} style={{marginBottom: '1rem'}}> 
            <Expense expense={ exp } /> 
        </div>
    );
}
