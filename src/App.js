// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router } from 'react-router-dom'; 
// import NavbarFile from './components/NavbarFile';
// import { CartProvider } from './components/CartContext';
// import Products from './components/Products'; // Import Products component

// function App() {
//   return (
//     <div className="App">
//       <CartProvider>
//         <Router> {/* Wrap the entire application with the Router */}
//           <NavbarFile />
//           <Products /> {/* Render the Products component */}
//         </Router>
//       </CartProvider>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
// import NavbarFile from './components/NavbarFile';
// import { CartProvider } from './components/CartContext';
// import Products from './components/Products'; // Import Products component
// import ContactUs from './components/ContactUsPage';
// import { Route } from 'react-router-dom/cjs/react-router-dom.min';
// function App() {
//   return (
//     <div className="App">
//       <CartProvider>
//         <ContactUs/>
       
//           <Route path="/contactus">
// <Contach-Us/>
//           </Route>
        
//         <Router> {/* Wrap the entire application with the Router */}
//           <NavbarFile />
//           <Products /> {/* Render the Products component */}
//         </Router>
//       </CartProvider>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter and other necessary components
import NavbarFile from './components/NavbarFile';
import { CartProvider } from './components/CartContext';
import Products from './components/Products'; // Import Products component
import ContactUs from './components/ContactUsPage'; // Import ContactUs component
import Home from './components/Home';
import AboutPage from './components/About';
function App() {
    return (
        <div className="App">
            <CartProvider>
                <Router>
                    <NavbarFile />
                    <Switch>
                    <Route path="/home" component={Home} />
                        <Route path="/contact-us" component={ContactUs} /> 
                        <Route path="/About-Page" component={AboutPage} />{/* Route for ContactUs */}
                        <Route path="/" component={Products} />
                         {/* Default route */}
                    </Switch>
                </Router>
            </CartProvider>
        </div>
    );
}

export default App;