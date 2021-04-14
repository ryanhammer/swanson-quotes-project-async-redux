import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default function Header() {
  return (
    <AppBar position='relative'>
      <Toolbar display='flex' alignItems='center'>
        <Link to='/'>
          <Typography variant='h6'>Home</Typography>
        </Link>
        <Link to='/about'>
          <Typography variant='h6'>About Ron</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}