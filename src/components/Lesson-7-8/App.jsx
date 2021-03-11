import React from 'react';
import { Route, NavLink, Link, Switch } from 'react-router-dom';
import HomeView from './views/HomeView';
import AutorsView from './views/AutorsView';
import BooksView from './views/BooksView';
import NotFoundView from './views/NotFoundView';

/* //// const linkStyles = { 
//   base: {color: 'black',},
//   active: {color: 'red',}
// } */



const App = () => (
  <>
    <ul>
      <li> <NavLink exact
        //// style={linkStyles.base}
        //// activeStyle={linkStyles.active}
        className="NavLink"
        activeClassName="NavLink--active"
        to="./">
        Home
        </NavLink>
      </li>
      <li> <NavLink
        className="NavLink"
        activeClassName="NavLink--active"
        to="./autors">
        Autors
        </NavLink> 
      </li>
      <li> <NavLink
        className="NavLink"
        activeClassName="NavLink--active"
        to="./books">
        Books
        </NavLink> 
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route path="/autors" component={AutorsView} />
      <Route path="/books" component={BooksView} />
      <Route exact component={NotFoundView} />
    </Switch>
  </>
);
export default App;
