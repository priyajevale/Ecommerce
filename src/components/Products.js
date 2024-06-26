import React, { useContext } from 'react';
import { Container, Button } from 'react-bootstrap';
import { CartContext } from './CartContext';

const productsArr = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
        title: 'Blue Color',
        price: 100,
        imageUrl: ' ',
    }
];

const Products = () => {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = (product) => {
        console.log('Adding to cart:', product); // Check if the correct product is being added
        addToCart(product);
    };

    return (
        <div>
            <Container>
                <div className="row">
                    {productsArr.map((product, index) => (
                        <div className="col-sm" key={index}>
                            <h3>{product.title}</h3>
                            <div className="row">
                                <img src={product.imageUrl} alt={product.title} height="250px" width="250px" />
                            </div>
                            <div className="row">
                                <div className='col'><p>${product.price}</p></div>
                                <div className='col'><Button variant="info" onClick={() => handleAddToCart(product)}>Add to Cart</Button></div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Products;