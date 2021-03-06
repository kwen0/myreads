import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import RouteSwitch from './RouteSwitch';
import { AuthProvider } from './context/AuthContext';
import "@fontsource/merriweather";
import "@fontsource/lato";
import { ModalProvider } from 'styled-react-modal'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ModalProvider>
        <RouteSwitch />
      </ModalProvider>
    </AuthProvider >
  </React.StrictMode>,

  document.getElementById('root')
);