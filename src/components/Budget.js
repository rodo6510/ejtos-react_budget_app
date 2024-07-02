import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
// import ExpenseTotal from './ExpenseTotal';

const Budget = () => {
    const { Currency } = useContext(AppContext);
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    // const [totalExpenses] = useState(ExpenseTotal);
    
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);


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
            <span>Budget:</span><span  style={{ marginLeft: '1rem' }}>{Currency}</span><input
                type="number"
                step="10"
                size="15"
                value={newBudget}
                onChange={handleBudgetChange}
            />
        </div>
    );
};
export default Budget;