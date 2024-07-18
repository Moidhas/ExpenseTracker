import React, { useState } from 'react';
import { PutExpense, PostExpense } from './expensesApi';
import { useDispatch } from 'react-redux';
import { Button, Row, Col, Form } from 'react-bootstrap';


 export default function ExpensesForm({ expense={ price: 0, desc: "" }, onEdit }) {
    const dispatch = useDispatch();
    const [formExpense, setFormExpense] = useState(expense);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormExpense( (state) => ( { ...state, [name]: value } ));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (onEdit === undefined) {
            PostExpense(dispatch, formExpense);
        } else {
            PutExpense(dispatch, formExpense);
            onEdit();
        }
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
                <Col> <Button type='submit' variant='primary'>Submit</Button> </Col>
            </Row>
        </Form>
    );
}
