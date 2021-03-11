import React , {Component } from 'react';
// import { Route, NavLink, Link, Switch } from 'react-router-dom';
// import MyComponent from './MyComponent';
import {CSSTransition} from 'react-transition-group';
class App extends Component {
    state = {  }
    render() { 
        return (
          <>
            <CSSTransition>
              <h1>PhoneBook</h1>
            </CSSTransition>
          </>
          
        );
    }
}
 
export default App;