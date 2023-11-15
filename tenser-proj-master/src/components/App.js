// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import Invoices from './Invoices';
import { useState,useEffect } from 'react';
import axios from 'axios';
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

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invoices" element={<Invoices />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  const [user, setUser] = useState(null);

	const getUser = async () => {
		try {
			const url = `http://localhost:3001/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user._json);
		} catch (err) {
			console.log(err);
		}
	};

  const logout = () => {
		window.open(`http://localhost:3001/auth/logout`, "_self");
	};

  useEffect(() => {
		getUser();
	}, []);


  return (
    <div>
      <h2>Home</h2>
      <div className="container">
        <h1>Welcome to Our Website</h1>
        <p>Explore and discover amazing things!</p>
        {user ? 
        ( <div><div>Name : {user.name}</div><button onClick={logout}>Logout</button></div>) : (<GoogleAuth />) }
      </div>
    </div>
  );
}

export default App;
