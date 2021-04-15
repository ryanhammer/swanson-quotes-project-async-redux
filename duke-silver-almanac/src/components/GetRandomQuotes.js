import React from 'react';
import { Box, Typography, Button, Container, TextField, makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { getQuotes } from '../actions';

const useStyles = makeStyles({
  appBarMarg: {
    marginBottom: '1rem'
  },
  getQuoteContainer: {
    display: `flex`,
    justifyContent: `space-evenly`
  },
  randomQuoteContainer: {
    marginTop: '2rem',
    display: `flex`,
    justifyContent: `space-evenly`
  },
  randomRonImage: {
    height: '243px',
    width: '370px'
  },
  randomQuoteBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  figCaption: {
    textAlign: 'center'
  }
});

const GetRandomQuotes = (props) => {

  const classes=useStyles();

  return (
    <>
      <Container
        align='center'
        maxWidth='md'
        className={classes.getQuoteContainer}
      >
        <Box>
          <Typography variant='body1' gutterBottom={true}>
            Click below for random Swanson-isms!
          </Typography>
          <Button 
            variant='contained'
            color='primary'
            onClick={() => props.getQuotes(`${props.apiURL}${props.requestNum}`)}
          >
            Get Quotes
          </Button>
        </Box>
        <Box>

        </Box>
        <TextField
            id="outlined-number"
            label="Add Quotes"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
      </Container>
      {props.quotes.length && (
        <Container className={classes.randomQuoteContainer}> 
          <Box className={classes.randomQuoteBox}>
            {props.quotes.map(item => (
              <Typography key={item.id}>{item}</Typography>
            ))}
          </Box>
          <figure>
            <img
              src={ require('../assets/swanson1.jpg').default }
              alt={'Ron Swanson'}
              className={classes.randomRonImage}
            />
            <figcaption className={classes.figCaption}>Ron Swanson</figcaption>
          </figure>
        </Container>
      )}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    apiURL: state.apiURL,
    requestNum: state.requestNum,
    quotes: state.quotes
  }
}

export default connect(mapStateToProps, { getQuotes })(GetRandomQuotes);