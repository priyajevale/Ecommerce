// import React, { useContext } from 'react';
// import { CartContext } from './CartContext';

// const Cart = () => {
//     const { cartItems } = useContext(CartContext);

//     // Filter cart items to only include items with quantity greater than 0
//     const cartItemsFiltered = cartItems.filter(item => item.quantity > 0);

//     return (
//         <div className="cart">
//             <h2>Cart</h2>
//             {cartItemsFiltered.map((item, index) => (
//                 <div className="cart-item" key={index}>
//                     <img src={item.imageUrl} alt={item.title} />
//                     <div>
//                         <h3>{item.title}</h3>
//                         <p>${item.price}</p>
//                         <p>Quantity: {item.quantity}</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Cart;
import React, { useState, useEffect } from 'react';

// Function to remove special characters from email
const cleanEmail = (email) => {
  return email.replace(/[^a-zA-Z0-9]/g, ''); // Remove all non-alphanumeric characters
};

// Function to make API calls
const makeApiCall = async (url, method, data) => {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('There was a problem with the API call:', error);
    throw error;
  }
};

// Component for adding and displaying cart items
const Cart = ({ userEmail }) => {
  const [cartItems, setCartItems] = useState([]);
  const cleanedEmail = cleanEmail(userEmail);
  const apiUrl = `https://crudcrud.com/api/850a7cc729064eb481b4485558019330/cart/${cleanedEmail}`;

  // Function to add a product to cart
  const addToCart = async (product) => {
    try {
      await makeApiCall(apiUrl, 'POST', product);
      console.log('Product added to cart successfully');
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  // Function to retrieve cart items
  const getCartItems = async () => {
    try {
      const response = await makeApiCall(apiUrl, 'GET');
      setCartItems(response);
      console.log('Cart items retrieved successfully:', response);
    } catch (error) {
      console.error('Error retrieving cart items:', error);
    }
  };

  // Load cart items on component mount
  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <button onClick={() => addToCart({ name: 'Product', price: 10 })}>
        Add Product to Cart
      </button>
    </div>
  );
};

export default Cart;