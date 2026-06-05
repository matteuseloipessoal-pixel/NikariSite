import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { builder } from "@builder.io/react";

builder.init("89d08ef748224d42b7bd865e074a81ab");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
