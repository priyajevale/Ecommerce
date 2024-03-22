import React from 'react';
import Cart from './Cart'; // Assuming Cart.js is in the same directory

const CartPage = () => {
  // Assuming you have a way to get the user's email, replace 'userEmail' with the actual email
  const userEmail = 'user@example.com';

  return (
    <div>
      <h1>Cart Page</h1>
      <Cart userEmail={userEmail} />
    </div>
  );
};

export default CartPage;