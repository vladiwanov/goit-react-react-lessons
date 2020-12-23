import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';

// import './index.css';
import App from './components/App';

// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// ----BEGIN----------------------------
// const link = React.createElement(
//   'a',
//   {
//     href: 'https://reactjs.org/',
//     target: '_blank',
//     rel: 'noreferrer noopener',
//   },
//   'ссылка на reactjs.org');
// // console.log(link);
//   ReactDOM.render(link, document.querySelector('#root'));

// const image = React.createElement('img', {
//   src:
//     'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
//   alt: 'Tacos With Lime',
//   width: 640,
// });


// const title = React.createElement('h2', null, 'Tacos With Lime');
// const price = React.createElement('p', null, 'Price: 10.99$');
// const button = React.createElement('button', { type: 'button' }, 'Add to cart');

// const product = React.createElement('div', null, image, title, price, button);
// console.log(product);

// const productWithChildrenInProps = React.createElement('div', {
//   children: [image, title, price, button],
// });
// ReactDOM.render(productWithChildrenInProps, document.querySelector('#root'));

const productPrice = 10.99;

// const productInJSX = (
//   <div>
//     <img
//       src= {imgURL}
//       alt="Tacos With Lime"
//       width="640"

//     />

//     <h2>Tacos With Lime</h2>
//     <p>Price: {productPrice}$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );


// ReactDOM.render(productInJSX, document.querySelector('#root'))

// const post = (

//   <Fragment>
//     <h2>  header </h2>
//     <p>body</p>
//   </Fragment>
// )

// const post = (
//   <>
//     <h2>  header </h2>
//     <p>body</p>
//   </>
// )

// --------------------------------------------------------


// // function Product(props) {
// function Product({imgURL, name, price }) {
//   return (
//  <div>
//  <img
//       // src= {props.imgURL}
//       src= {imgURL}
//       alt="Tacos With Lime"
//       width="640"
//   />
//       {/* <h2>{props.name }</h2> */}
//       <h2>{name}</h2>
//     {/* <p>Price: {props.price}$</p> */}
//     <p>Price: {price}$</p>
//       <button type="button">Add to cart</button>
//     </div >
//   )
// }

// function App() {
//   return (
//       <>
//      <h2>best products</h2>
//       <Product imgURL="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         name="Tacos With Lime"
//         price="20" />
    
//       <Product imgURL="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         name="Вкусные блюда мира"
//         price="120" />
//     </>
//   )
// }

ReactDOM.render(<App/>, document.querySelector('#root'))
