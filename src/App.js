import React, { Component } from 'react';
import './App.css';
import SearchForm from "./components/searchform";
import Counter from './components/counter';
import Menu from './components/router';
//
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
      // <div></div> Changes for bug fix #1233
    );
  }
}

export default App;
