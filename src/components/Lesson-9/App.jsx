import React , {Component } from 'react';
// import { Route, NavLink, Link, Switch } from 'react-router-dom';
import MyComponent from './MyComponent';
class App extends Component {
    state = {  }
    render() { 
        return (
            <>
                <MyComponent {...this.props} />
            </>
        );
    }
}
 
export default App;