import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import  searchForm from "./searchform";
import Home from "./home";

const Menu = () => ( //stateless components are usually defined using arrow function
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Seach</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/search" component={searchForm} />
    </div>
  </Router>
);

export default Menu;