import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Heading from './demo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Heading />
    <App />
    <div style={{ backgroundColor: "purple", height: "200px", width: "200px" }}></div>
  </>
);

