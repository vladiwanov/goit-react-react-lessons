import ReactDOM from 'react-dom';
import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import App from './components/Lesson-3-5-11-12/App';
// import App from './components/Lesson-6/App';
// import App from './components/Lesson-7/App';
// import App from './components/Lesson-9/App';
// import App from './components/Lesson-10/App';
import './index.css';
// import { Provider } from 'react-redux';
import { myAction } from './components/Lesson-3-5-11-12/redux/actions';
import store from './components/Lesson-3-5-11-12/redux/store';
// import reportWebVitals from './reportWebVitals';

console.log('store', store);
console.log(store.dispatch(myAction));

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById('root'),
);
