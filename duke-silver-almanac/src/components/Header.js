import React from 'react';
import { Link as RouterLink} from 'react-router-dom';
import { AppBar, Toolbar, Typography, Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-evenly`
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`
  }
});

export default function Header() {

  const classes = useStyles();
  return (
    <AppBar position='relative'>
      <Toolbar className={classes.navDisplayFlex}>
        <Link
          component={ RouterLink }
          to='/' color='secondary'
          className={classes.linkText}
        >
          Home
        </Link>
        <Link 
          component={ RouterLink }
          to='/about' color='secondary'
          className={classes.linkText}
        >
          About Ron
        </Link>
      </Toolbar>
    </AppBar>
  )
}