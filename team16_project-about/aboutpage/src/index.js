import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AboutPage from './App';
import * as serviceWorker from './serviceWorker';

//Re-renders the page on a loop of [second param] milliseconds
setInterval(ReactDOM.render(<AboutPage />, document.getElementById('root')),1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();