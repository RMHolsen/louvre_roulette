import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
// functions built into redux to make our life easier. allegedly.
import thunk from 'redux-thunk'
import { BrowserRouter as Router } from 'react-router-dom'
// enables links and routing within the app (when <App> is wrapped in <Router>)
import { Provider } from 'react-redux'
import GalleriesReducer from './reducers/GalleriesReducer';
import './johncage.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(GalleriesReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
<Provider store={store}>
    <Router>
        <App />
        <br />
        <br />
        <p id="Credits">This page styled in the fashion of John Cage's "4'33".<br />
        Look, I'm easily amused and also a nerd.</p>
    </Router>
</Provider>, 
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// No.
