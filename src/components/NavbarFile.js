// import React, { useState, useContext } from 'react';
// import { Navbar, Nav, Container,Button,Badge } from 'react-bootstrap'; // Import Navbar, Nav, and Container from react-bootstrap
// import { CartContext } from './CartContext';
// import { Link } from 'react-router-dom';
// const NavbarFile = () => {
//     const [showCart, setShowCart] = useState(false);
//     const { cartItems } = useContext(CartContext);

//     const toggleCart = () => {
//         setShowCart(!showCart);
//     };

//     return (
//         <div>
//             <Navbar variant="dark" expand="sm" bg="blue">
//                 <Container>
//                 <Nav.Link as={Link} to="/">Home</Nav.Link> {/* Use Link instead of href */}
//                     <Nav.Link as={Link} to="/store">Store</Nav.Link> {/* Use Link instead of href */}
//                     <Nav.Link as={Link} to="/about">About</Nav.Link>
//                     <Button as={Link} to="/cart" onClick={toggleCart}> 
//                         Cart<Badge bg="success">{cartItems.length}</Badge>
//                     </Button> 
//                 </Container>
//             </Navbar>
//         </div>
//     );
// }

// export default NavbarFile;
// import React, { useState, useContext } from 'react';
// import { Navbar, Nav, Container, Button, Badge } from 'react-bootstrap';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import { CartContext } from './CartContext';
// import CartItems from './CartItem';// Import CartItems component
// import { NavLink } from 'react-router-dom/cjs/react-router-dom';
// const NavbarFile = () => {
//     const [showCart, setShowCart] = useState(false);
//     const { cartItems } = useContext(CartContext);

//     const toggleCart = () => {
//         setShowCart(!showCart);
//     };

//     return (
//         <div>
//             <Navbar variant="dark" expand="sm" bg="blue">
//                 <Container>
//                     <Nav.Link as={Link} to="/">Home</Nav.Link>
//                     <Nav.Link as={Link} to="/store">Store</Nav.Link>
//                     <Nav.Link as={Link} to="/about">About</Nav.Link>
//                     <NavLink to="/contach-us">Contact-Us</NavLink>
//                     <Button onClick={toggleCart}> 
//                         Cart<Badge bg="success">{cartItems.length}</Badge> {/* Use cartItems instead of CartItems */}
//                     </Button> 
//                 </Container>
//             </Navbar>
//             {showCart && <CartItems />} {/* Render CartItems component if showCart is true */}
//         </div>
//     );
// }

// export default NavbarFile;
import React, { useState, useContext } from 'react';
import { Navbar, Nav, Container, Button, Badge } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom'; // Import Link and NavLink from react-router-dom
import { CartContext } from './CartContext';
import CartItems from './CartItem'; // Assuming CartItems is a component to display cart items

const NavbarFile = () => {
    const [showCart, setShowCart] = useState(false);
    const { cartItems } = useContext(CartContext);

    const toggleCart = () => {
        setShowCart(!showCart);
    };

    return (
        <div>
            <Navbar variant="dark" expand="sm" bg="blue">
                <Container>
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/store">Store</Nav.Link>
                    <NavLink  to="/About-Page">About</NavLink>
                    <NavLink to="/contact-us">Contact Us</NavLink> {/* Use NavLink for navigation */}
                    <Button onClick={toggleCart}>
                        Cart <Badge bg="success">{cartItems.length}</Badge>
                    </Button>
                </Container>
            </Navbar>
            {showCart && <CartItems />} {/* Render CartItems component if showCart is true */}
        </div>
    );
}

export default NavbarFile;