import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MatchStatistics = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5196/api/match-statistics');
        setMatches(response.data);
      } catch (error) {
        alert('Error fetching match statistics');
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Match Statistics</h2>
      <ul>
        {matches.map((match) => (
          <li key={match.matchId}>
            {match.matchDate} - {match.venue} - {match.team1Name} vs {match.team2Name} - Total Engagements: {match.totalEngagements}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchStatistics;
