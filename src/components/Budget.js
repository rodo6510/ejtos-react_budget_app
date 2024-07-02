import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseTotal from './ExpenseTotal';
// import { ExpenseTotal } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [totalExpenses] = useState(ExpenseTotal);

    const handleBudgetChange = (event) => {
            if (event.target.value >20000){
                alert("Budget cannot increase more than 20.000!");
            }if (event.target.value < totalExpenses){
                alert("You cannot reduce budget value lower than he spending!");    
            }else{
               setNewBudget(event.target.value);   
            }
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}
            />
        </div>
    );
};
export default Budget;
