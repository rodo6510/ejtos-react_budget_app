import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    //const { currentExp } = useContext(AppContext);
    
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
            if (event.target.value >20000){
                alert("Budget cannot increase more than 20.000!");
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
