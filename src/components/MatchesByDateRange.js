import React, { useState } from 'react';
import axios from 'axios';

const MatchesByDateRange = () => {
  const [dates, setDates] = useState({ startDate: '', endDate: '' });
  const [matches, setMatches] = useState([]);

  const handleChange = (e) => {
    setDates({ ...dates, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:5196/api/matches-date-range', {
        params: {
          startDate: dates.startDate,
          endDate: dates.endDate,
        },
      });
      setMatches(response.data);
    } catch (error) {
      alert('Error fetching matches by date range');
    }
  };

  return (
    <div>
      <h2>Matches by Date Range</h2>
      <form onSubmit={handleSubmit}>
        <input name="startDate" type="date" onChange={handleChange} />
        <input name="endDate" type="date" onChange={handleChange} />
        <button type="submit">Get Matches</button>
      </form>
      <ul>
        {matches.map((match) => (
          <li key={match.matchId}>
            {match.matchDate} - {match.venue} - {match.team1Name} vs {match.team2Name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchesByDateRange;
