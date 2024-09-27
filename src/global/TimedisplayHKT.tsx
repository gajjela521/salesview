import React, { useState, useEffect } from 'react';
import { TextField, Box } from '@mui/material';

const TimeDisplayHKT = () => {
  const [dateTime, setDateTime] = useState({
    time: new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Hong_Kong' }),
    date: new Date().toLocaleDateString('en-US', { timeZone: 'Asia/Hong_Kong' }),
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime({
        time: new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Hong_Kong' }),
        date: new Date().toLocaleDateString('en-US', { timeZone: 'Asia/Hong_Kong' }),
      });
    }, 1000);

    return () => clearInterval(timer); // Clean up the timer on unmount
  }, []);

  return (
    <Box sx={{ display: 'flex',flexDirection: 'row', alignItems: 'center' }}>
      <table>
        <thead>
          <tr>
            <th><h6>Hong Kong (HKT)</h6></th>
            <th>
              <TextField
                label="Time"
                value={dateTime.time}
                InputProps={{
                  readOnly: true,
                }}
              />
            </th>
            <th>
              <TextField
                label="Date"
                value={dateTime.date}
                InputProps={{
                  readOnly: true,
                }}
              />
            </th>
          </tr>
        </thead>
      </table>
    </Box>
  );
};

export default TimeDisplayHKT;
