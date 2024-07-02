    import React, { useContext } from 'react';
    import { TiDelete } from 'react-icons/ti';
    import { AppContext } from '../context/AppContext';
    import './ExpenseItem.css';

    //import Currency from './Currency';
    const ExpenseItem = (props) => {
        const { dispatch } = useContext(AppContext);
        const { currency } = useContext(AppContext);

        const handleDeleteExpense = () => {
            dispatch({
                type: 'DELETE_EXPENSE',
                payload: props.id,
            });
        };
        const increaseAllocation = (name) => {
            const expense = {
                name: name,
                cost: 10,
            };
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense
            });
        }
        const decreaseAllocation = (name) => {
            const expense = {
                name: name,
                cost: 10,
            };
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense
            });
        }
        return (
            <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><button class="green-button" onClick={event=> increaseAllocation(props.name)}>+</button></td>
            <td><button class="red-button" onClick={event=> decreaseAllocation(props.name)}>-</button></td>
            <td><TiDelete size='2.5em' onClick={handleDeleteExpense}></TiDelete></td>
            </tr>
        );
    };
    export default ExpenseItem;
