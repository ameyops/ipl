import React, { useState } from 'react';
import axios from 'axios';

const InsertPlayer = () => {
  const [player, setPlayer] = useState({
    playerName: '',
    teamId: '',
    role: '',
    age: '',
    matchesPlayed: ''
  });

  const handleChange = (e) => {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5196/api/insert-player', player);
      if (response.data) {
        alert('Player inserted successfully');
      }
    } catch (error) {
      alert('Error inserting player');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="playerName" placeholder="Player Name" onChange={handleChange} />
      <input name="teamId" placeholder="Team ID" onChange={handleChange} />
      <input name="role" placeholder="Role" onChange={handleChange} />
      <input name="age" placeholder="Age" onChange={handleChange} />
      <input name="matchesPlayed" placeholder="Matches Played" onChange={handleChange} />
      <button type="submit">Insert Player</button>
    </form>
  );
};

export default InsertPlayer;
