import React from 'react';


// function Product(props) {
 export default function Product({imgURL, name, price }) {
  return (
 <div>
 <img
      // src= {props.imgURL}
      src= {imgURL}
      alt="Tacos With Lime"
      width="640"
  />
      {/* <h2>{props.name }</h2> */}
      <h2>{name}</h2>
    {/* <p>Price: {props.price}$</p> */}
    <p>Price: {price}$</p>
      <button type="button">Add to cart</button>
    </div >
  )
}