
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter and other necessary components
import NavbarFile from './components/NavbarFile';
import { CartProvider } from './components/CartContext';
import Products from './components/Products'; // Import Products component
import ContactUs from './components/ContactUsPage'; // Import ContactUs component
import Home from './components/Home';
import AboutPage from './components/About';
import ProductPage from './components/ProductPage';
import LoginPage from './components/LoginPage';
function App() {
    return (
        <div className="App">
            <CartProvider>
                <Router>
                    <NavbarFile />
                    <Switch>
                    <Route path="/home" component={Home} />
                        <Route path="/contact-us" component={ContactUs} /> 
                        
<Route path="/About-Page" component={AboutPage} />
<Route path="/login" element={<LoginPage />} />
                        <Route path="/products/:productId" component={ProductPage} />
                        
                        <Route path="/" component={Products} />
                         {/* Default route */}
                    </Switch>
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