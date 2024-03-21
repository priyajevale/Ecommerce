import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
    const { cartItems } = useContext(CartContext);

    // Filter cart items to only include items with quantity greater than 0
    const cartItemsFiltered = cartItems.filter(item => item.quantity > 0);

    return (
        <div className="cart">
            <h2>Cart</h2>
            {cartItemsFiltered.map((item, index) => (
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

export default Cart;