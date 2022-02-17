import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import RouteSwitch from './RouteSwitch';
import { AuthProvider } from './context/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <RouteSwitch />
    </AuthProvider >
  </React.StrictMode>,

  document.getElementById('root')
);