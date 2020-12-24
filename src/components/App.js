import Product from "./Product";
import React from 'react';
// import ReactDOM from 'react-dom';
import Section from "./Section";
import Booklist from './Booklist';
import favouriteBooks from '../books.json';

console.log(favouriteBooks);

export default function App() {
  return (
    <>
      
   <Booklist books={favouriteBooks}/>

      <h1> </h1>
      {/* <Section title="best products"> */}
        <Product imgURL="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
          name="Tacos With Lime"
          price={20}
          quantity={70}
        />
        <Product imgURL="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
          name="Tacos With Lime"
          price={20}
          quantity={50}
        />
      {/* </Section> */}
      <Section title="more products">
        <Product
          // imgURL="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
          name="Вкусные блюда мира"
          price={120}
          quantity={40}
        />
      </Section>
   </>
  );
}

// ReactDOM.render(<App/>, document.querySelector('#root'));