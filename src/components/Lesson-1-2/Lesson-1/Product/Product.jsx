import React from 'react';
import PropTypes from 'prop-types';

// function Product(props) {
function Product({ imgURL, name, price, quantity }) {
  return (
    <div>
      <img
        // src= {props.imgURL}
        src={imgURL}
        alt="Tacos With Lime"
        width="640"
      />
      <p>{quantity < 50 ? 'few eft' : 'stock'}</p>

      {/* <h2>{props.name }</h2> */}
      <h2>{name}</h2>
      {/* <p>Price: {props.price}$</p> */}
      <p>Price: {price}$</p>
      <button type="button">Add to cart</button>
    </div>
  );
}
Product.defaultProps = {
  imgURL:
    'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
};

Product.propTypes = {
  imgURL: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
