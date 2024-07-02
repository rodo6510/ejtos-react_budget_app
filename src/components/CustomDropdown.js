import React, { useState } from 'react';
import './CustomDropdown.css';

const CustomDropdown = ({ options, selected, onOptionSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (value) => {
        onOptionSelect(value);
        setIsOpen(false);
    };

    return (
        <div className='custom-dropdown'>
            <div className='custom-dropdown__selected' onClick={handleDropdownToggle}>
                {selected}
            </div>
            {isOpen && (
                <ul className='custom-dropdown__options'>
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className={`custom-dropdown__option ${option === selected ? 'selected' : ''}`}
                            onClick={() => handleOptionSelect(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomDropdown;
