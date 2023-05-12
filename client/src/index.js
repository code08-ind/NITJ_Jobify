import $ from 'jquery';
import App from './App';
import React from 'react';
import Popper from 'popper.js';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

/* Rendering Root that is to be attached with div#root */
const root = ReactDOM.createRoot(document.getElementById('root'));

/* Used in Fragment of the Root */
root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
);
