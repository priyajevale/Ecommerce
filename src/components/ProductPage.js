import React from 'react';
import { Magnifier } from 'react-image-magnifiers';
import './ProductPage.css';
const ProductPage = () => {
  return (
    <div className="product-page">
      <h1>Product Name</h1>
      <Magnifier
        imageSrc="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
        imageAlt="Product Image 1"
        largeImageSrc="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
      />
      <Magnifier
        imageSrc="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
        imageAlt="Product Image 2"
        largeImageSrc="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
      />
      <Magnifier
        imageSrc="https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
        imageAlt="Product Image 3"
        largeImageSrc="https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
      />
      <Magnifier
        imageSrc="https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
        imageAlt="Product Image 4"
        largeImageSrc="https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
      />
      <p>Product Description</p>
    </div>
  );
};

export default ProductPage;