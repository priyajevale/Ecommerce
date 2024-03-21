import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartItems = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className="cart-items">
            <h2>Cart</h2>
            {cartItems.map((item, index) => (
                <div className="cart-item" key={index}>
                    <img src={item.imageUrl} alt={item.title} />
                    <div>
                        <h3>{item.title}</h3>
                        <p>${item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartItems;