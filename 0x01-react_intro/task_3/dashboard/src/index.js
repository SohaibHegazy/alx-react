import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import Notifications from './Notifications';

const root = ReactDOM.createRoot(document.getElementById('root'));
const rootNotifications = ReactDOM.createRoot(document.getElementById('root-notifications'));

rootNotifications.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

