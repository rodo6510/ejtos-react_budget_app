import React, { useContext, useState } from 'react'; 
import { AppContext } from '../context/AppContext';
import CustomDropdown from './CustomDropdown'; // Assuming CustomDropdown is in the same directory
import './CustomDropdown.css';

const Currency = () => {
    // const { currency } = useContext(AppContext);
    const initialCurrencies = ['Currency (£ Pound)', '$ Dollar', '£ Pound', '€ Euro', '₹ Ruppee' ];
    const [newCurrency, setNewCurrency] = useState(initialCurrencies[0]);
    const [availableCurrencies, setAvailableCurrencies] = useState(initialCurrencies.slice(1));

    const handleCurrencySelect = (selectedCurrency) => {
        setNewCurrency(selectedCurrency);
        setAvailableCurrencies(initialCurrencies.filter(currency => currency !== selectedCurrency));
    }

    return (
        <div className='alert alert-secondary'>
            <CustomDropdown 
                options={availableCurrencies} 
                selected={newCurrency} 
                onOptionSelect={handleCurrencySelect} 
            />
        </div>
    );
};
export default Currency;
