import React from 'react'
import ReactDOM from 'react-dom'
import reducers from './reducers/index.js';
import { createStore,applyMiddleware,compose } from 'redux';
import thunk from "redux-thunk";
import { Provider } from 'react-redux'


import App from './app.js'


const store =createStore(reducers,compose(applyMiddleware(thunk)));




ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById("root"));



