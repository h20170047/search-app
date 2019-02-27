import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import reducers from './redux/reducers'
import {Provider} from 'react-redux';

const store= createStore(
    reducers, //methods mapping to diff functions
    {users: []} //state in redux
    )
    ReactDOM.render(<Provider store={store}><App /></Provider> , document.getElementById('root'));