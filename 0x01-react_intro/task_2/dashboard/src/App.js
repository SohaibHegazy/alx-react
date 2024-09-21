import React from 'react';
import holbertonLogo from './holberton-logo.png';
import { getFullYear, getFooterCopy } from './utils';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holbertonLogo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
	<form>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" />
          <br /><br />
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password" />
          <br /><br />
          <button type="submit">OK</button>
        </form>
      </body>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(false)}</p>
      </footer>
    </div>
  );
}

export default App;

