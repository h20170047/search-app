import React, { Component } from 'react';
import './App.css';
import SearchForm from "./components/searchform";
import Counter from './components/counter';
import Menu from './components/router';

class App extends Component {
  render() {
    return (
      <div>
        <div>React</div>
        <Menu></Menu>
        <router-outlet></router-outlet>
        {/* <SearchForm></SearchForm> */}
        {/* <Counter></Counter> */}
      </div>
      // <div></div>
    );
  }
}

export default App;
