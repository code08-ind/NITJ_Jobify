import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

/* Rendering Root that is to be attached with div#root */
const root = ReactDOM.createRoot(document.getElementById('root'));

/* Used in Fragment of the Root */
root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
);
