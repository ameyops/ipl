import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';

const Navbar = () => {
  const { isLoggedIn, login, logout } = useContext(LoginContext);

  return (
    <nav>
      <ul>
        <li><Link to="/">Insert Player</Link></li>
        <li><Link to="/statistics">Match Statistics</Link></li>
        <li><Link to="/top-players">Top 5 Players</Link></li>
        <li><Link to="/matches-date-range">Matches by Date Range</Link></li>
        {!isLoggedIn ? (
          <button onClick={login}>Login</button>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
