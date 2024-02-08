import { Stack } from '@mui/material';
import { useState } from 'react';
import Axios from 'axios';

import Heading from './Heading';
import URL from './URL';
import Statistics from './Statistics';



function App() {
  const [stats, setStats] = useState({});
  const [statsAvailable, setStatsAvailable] = useState(false);

  const getStats = async (playlistUrl) => {
    console.log(playlistUrl);
    const result = await Axios.get("http://localhost:4000/", { params: { url: playlistUrl} });
    setStats(result.data);
    setStatsAvailable(true);
  };

  return (
    <Stack spacing={2} >
        <Heading />
        <URL getStats={getStats} />
        {statsAvailable === true && <Statistics stats={stats} />}
    </Stack>
  );
}

export default App;
