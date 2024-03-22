
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarFile from './components/NavbarFile';
import AboutPage from './components/About';
import { CartProvider } from './components/CartContext';
import Home from './components/Home';
import LoginPage from './components/LoginPage'; // Import LoginPage component
import Products from './components/Products'; // Import Products component
import firebase from './components/Firebase';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <div className="App">
      <CartProvider>
        <Router>
          <NavbarFile />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/products" element={user ? <Products /> : <Navigate to="/login" />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavbarFile from './components/NavbarFile';
// import AboutPage from './components/About';
// import LoginPage from './components/LoginPage'; // Add the LoginPage component import
// import ProductsPage from './components/ProductsPage'; // Add the ProductsPage component import
// import { CartProvider } from './components/CartContext';
// import { AuthProvider } from './components/AuthContext'; // Add the AuthProvider import

// function App() {
//   return (
//     <div className="App">
//       <AuthProvider> {/* Wrap your components with AuthProvider */}
//         <CartProvider>
//           <Router>
//             <NavbarFile />
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<AboutPage />} />
//               <Route path="/login" element={<LoginPage />} /> {/* Add the route for LoginPage */}
//               <Route path="/products" element={<ProductsPage />} /> {/* Add the route for ProductsPage */}
//             </Routes>
//           </Router>
//         </CartProvider>
//       </AuthProvider>
//     </div>
//   );
// }

// export default App;