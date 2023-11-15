// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import Invoices from './Invoices';

function App() {
  return (
    <Router>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/invoices">Invoices</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Route path="/" exact render={() => <Home />} />
        <Route path="/invoices" render={() => <Invoices />} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <div className="container">
        <h1>Welcome to Our Website</h1>
        <p>Explore and discover amazing things!</p>
        <GoogleAuth />
      </div>
    </div>
  );
}

export default App;
