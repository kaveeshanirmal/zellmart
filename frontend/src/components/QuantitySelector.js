import React from 'react';
import './CSS/productPage.css';

const QuantitySelector = ({ quantity, onQuantityChange }) => {
    return (
        <div className="quantity-selector">
            <label htmlFor="quantity">Quantity:</label>
            <input 
                type="number" 
                id="quantity" 
                name="quantity" 
                value={quantity} 
                min="1" 
                onChange={onQuantityChange} 
            />
        </div>
    );
};

export default QuantitySelector;
