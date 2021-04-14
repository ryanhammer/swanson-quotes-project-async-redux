import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default function Header() {
  return (
    <AppBar position='relative'>
      <Toolbar display='flex' alignItems='center'>
        <Typography variant='h6'>Home</Typography>
        <Typography variant='h6'>About Ron</Typography>
      </Toolbar>
    </AppBar>
  )
}