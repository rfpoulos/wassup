import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { connect, Provider } from 'react-redux';
import { reducer, store } from './reduxSetUp';

let ui = 
    <Provider store={store}>
        <App />
    </Provider>

ReactDOM.render(ui, document.getElementById('root'));
