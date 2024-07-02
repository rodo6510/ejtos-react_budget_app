import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { dispatch } = useContext(AppContext);
  const [selectedOption, setSelectedOption] = useState('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const options = [
    { label: '$ Dollar', value: '$' },
    { label: '£ Pound', value: '£' },
    { label: '€ Euro', value: '€' },
    { label: '₹ Ruppee', value: '₹' },
  ];

  const handleDivClick = (option) => {
    setSelectedOption(`Currency (${option.label})`);
    setIsDropdownVisible(false);
    changeCurrency(option.value);
  };

  const changeCurrency = (val) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: val,
    });
  };

  return (
    <div className='alert alert-secondary'>
      <div 
        className="dropdown" 
        onMouseEnter={() => setIsDropdownVisible(true)} 
        onMouseLeave={() => setIsDropdownVisible(false)}
      >
        <button className="dropdown-button" style={{ color: selectedOption ? 'white' : 'white' }}>
          {selectedOption ? selectedOption : 'Select an option'}
        </button>
        {isDropdownVisible && (
          <div className="dropdown-content">
            {options.map((option) => (
              <div key={option.value} onClick={() => handleDivClick(option)}>
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .dropdown {
          position: relative;
          display: inline-block;
        }

        .dropdown-button {
          padding: 10px;
          background-color: #73df6a;
          border: 1px solid #ccc;
          cursor: pointer;
          border-radius: 8px; /* Rounded corners for the button */
          color: white; /* Ensure button text is always white */
        }

        .dropdown-content {
          display: none;
          position: absolute;
          background-color: #73df6a;
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
          z-index: 1;
          border-radius: 8px; /* Rounded corners for the dropdown list */
        }

        .dropdown-content div {
          color: black;
          padding: 12px 16px;
          text-decoration: none;
          display: block;
          cursor: pointer;
        }

        .dropdown-content div:hover {
          background-color: #f1f1f1;
        }

        .dropdown:hover .dropdown-content {
          display: block;
        }
      `}</style>
    </div>
  );
};

export default Currency;
