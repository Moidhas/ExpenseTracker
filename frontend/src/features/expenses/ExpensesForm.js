import React, { useEffect, useState } from 'react';
import { GetExpenses, PutExpense, PostExpense, DeleteExpense } from './expensesApi';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Row, Col, Form } from 'react-bootstrap';


 export default function ExpensesForm() {
    const dispatch = useDispatch();
    const [formExpense, setFormExpense] = useState({ price: 0, desc: "" });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormExpense( (state) => ( { ...state, [name]: value } ));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        PostExpense(dispatch, formExpense);
    };
    return (
        <Form onSubmit={handleSubmit} style={{marginBottom: '2rem', marginTop: '2rem' }}>
            <Row>
                <Col>
                    <label>
                        Description:
                        <input type="text" name='desc' value={formExpense.desc} onChange={handleChange} />
                    </label>
                </Col>
                <Col>
                    <label>
                        Price:
                        <input type="number" name='price' value={formExpense.price} onChange={handleChange}  />
                    </label>
                </Col>
                <Col> <Button type='submit' variant='primary'>Add</Button> </Col>
            </Row>
        </Form>
    );
}
