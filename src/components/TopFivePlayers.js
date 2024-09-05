import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TopFivePlayers = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5196/api/top-five-players');
        setPlayers(response.data);
      } catch (error) {
        alert('Error fetching top players');
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Top 5 Players</h2>
      <ul>
        {players.map((player) => (
          <li key={player.playerId}>
            {player.playerName} - Matches Played: {player.matchesPlayed}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopFivePlayers;
