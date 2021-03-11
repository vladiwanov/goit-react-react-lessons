import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import App from './components/Lesson-3-5/App';
// import App from './components/Lesson-6/App';
// import App from './components/Lesson-7/App';
import App from './components/Lesson-9/App';
import './index.css';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
