import React, { useState} from 'react';
import './CSS/productPage.css';

const ProductDetails = ({ title,price,availability,brand,platform,battery,batteryCharging,colors,nfc}) => {

    const [orderQuantity, setQuanitity] = useState(1);


    const incrementQuanitity = () => {
        if(availability === 'sold out'){
            setQuanitity(0);
        }
        else{
            setQuanitity(orderQuantity + 1);
        }
        
    }
    const decrementQuanitity = () => {
        if(availability === 'sold out'){
            setQuanitity(0);
        }
        else if(orderQuantity <= 1){
            setQuanitity(1);
        }
        else{
            setQuanitity(orderQuantity - 1);
        }
    }

    return (
        <div className="product-details">
            <br/> <br/>
            <h2>{title}</h2>
            {availability === 'sold out' && <p className="price">{price} <span className="sold-out">Sold out</span></p>}
            <p className="short-description">
                Brand: {brand} <br/>
                {battery} Battery <br/>
                {batteryCharging} <br/>
                {platform}<br/>
                {colors} <br/>
                NFC { nfc === 'yes' ? 'enabled' : 'disabled'}
            </p>
            <h4>Quanitity: </h4><br/>
            <div class="quantity">
                <button class="quantity-btn minus" onClick={decrementQuanitity}>-</button>
                <div className='quanitity-input'>{orderQuantity}</div>
                <button class="quantity-btn plus" onClick={incrementQuanitity}>+</button>
            </div>
            <br/>
            <br/>
           {availability === 'sold out' && <button className="sold-out-button" >Sold out</button>}
            {availability === 'in stock' && <button className="order-button" >Order now</button>}
            <div className="badges">
                <b><span>100% Authentic</span></b>
                <b><span>Island wide Delivery</span></b>
            </div>
        </div>
    );
};

export default ProductDetails;
