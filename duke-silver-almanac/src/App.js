import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Toolbar, Typography } from '@material-ui/core';

function App() {
  return (
    <CssBaseline>
      <div className="App">
        <Toolbar>
          <Typography variant='h6'>Home</Typography>
          <Typography variant='h6'>About Ron</Typography>
        </Toolbar>
        <Typography variant='h1'>Duke Silver's Almanac</Typography>
      </div>
    </CssBaseline>
    
  );
}

export default App;
