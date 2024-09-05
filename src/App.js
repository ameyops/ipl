import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginProvider } from './context/LoginContext';
import InsertPlayer from './components/InsertPlayer';
import MatchStatistics from './components/MatchStatistics';
import TopFivePlayers from './components/TopFivePlayers';
import MatchesByDateRange from './components/MatchesByDateRange';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <LoginProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<InsertPlayer />} />
          <Route path="/statistics" element={<MatchStatistics />} />
          <Route path="/top-players" element={<TopFivePlayers />} />
          <Route path="/matches-date-range" element={<MatchesByDateRange />} />
        </Routes>
      </LoginProvider>
    </Router>
  );
}

export default App;
