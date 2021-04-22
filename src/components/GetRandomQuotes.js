import React from 'react';
import { Box, Typography, Button, Container, TextField, makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { getQuotes, addQuotes, resetQuotes } from '../actions';

const useStyles = makeStyles({
  addButtonBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
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
  },
  resetBtnBox: {
    textAlign: 'center',
    marginBottom: '5rem'
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
        <Box className={classes.addButtonBox}>
          <Typography variant='body1' gutterBottom={true}>
            Click below for random Swanson-isms!
          </Typography>
          <Box>
            <Button 
              variant='contained'
              color='primary'
              onClick={() => props.getQuotes(`${props.apiURL}${props.requestNum}`)}
            >
              Get Quotes
            </Button>
          </Box>

        </Box>
        <Box>
          <Typography variant='body1' gutterBottom={true}>
              Add more (up to 10)!
          </Typography>
          <TextField
            id="outlined-number"
            label="Add"
            type="number"
            InputProps={{ inputProps: { min: 1, max: 10, }
            }}
            size='medium'
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            onChange={(event) => props.addQuotes(event.target.value) }
            value={ props.requestNum }
          />
          
        </Box>
        
      </Container>
      {props.quotes.length && (
        <Box>
          <Container className={ classes.randomQuoteContainer }> 
            <Box className={ classes.randomQuoteBox }>
              { props.quotes.map(item => (
                <Typography key={ item }>{ item }</Typography>
              ))}
            </Box>
            <figure>
              <img
                src={ require('../assets/swanson1.jpg').default }
                alt={'Ron Swanson'}
                className={ classes.randomRonImage }
              />
              <figcaption className={ classes.figCaption }>
                Ron Swanson
              </figcaption>
            </figure>
          </Container>
          <Box className={classes.resetBtnBox}>
            <Button 
              variant='contained'
              color='primary'
              onClick={() => props.resetQuotes()}
            >
              Reset Quote Getter
            </Button>
          </Box>
        </Box>
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

export default connect(mapStateToProps, { getQuotes, addQuotes, resetQuotes })(GetRandomQuotes);