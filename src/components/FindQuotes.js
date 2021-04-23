import React from 'react';
import { Box, Typography, Button, Container, TextField, makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { getQuotes, searchQuotes, resetQuotes, changeFeature } from '../actions';

const useStyles = makeStyles({
  searchQuotesBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  getQuoteContainer: {
    display: `flex`,
    justifyContent: `space-evenly`
  },
  findQuoteContainer: {
    marginTop: '2rem',
    display: `flex`,
    justifyContent: `space-evenly`
  },
  findRonImage: {
    height: '243px',
    width: '370px'
  },
  findQuoteBox: {
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
  },
  searchButton: {
    marginTop: '0.5rem'
  },
  buttonSplitter: {
    marginTop: '1rem',
    marginBottom: '1rem'
  }
});

const FindQuotes = (props) => {

  const classes=useStyles();
  let isQuotes = props.quotes.length > 0;

  return (
    <>
      <Container
        align='center'
        maxWidth='md'
        className={classes.getQuoteContainer}
      >
        <Box className={classes.searchQuotesBox}>
          <Typography variant='body1' gutterBottom={true}>
            Enter a single term you're interested in and then click below to search
          </Typography>
          <Box>
            <Button 
              variant='contained'
              color='primary'
              className={ classes.searchButton }
              onClick={() => props.getQuotes(`${props.apiURL}search/${props.searchValue}`)}
            >
              Search Quotes
            </Button>
            <Typography variant='body1' gutterBottom={true} className={classes.buttonSplitter}>
              Or, click below to go back to getting random quotes
            </Typography>
            <Button
              variant='contained'
              color='secondary'
              onClick={() => props.changeFeature(props.searchFeature)}
            >
              Get Random Quotes
            </Button>
          </Box>

        </Box>
        <Box>
          <Typography variant='body1' gutterBottom={true}>
              Enter Search Term
          </Typography>
          <TextField
            label="Search"
            type="text"
            size='medium'
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            onChange={(event) => props.searchQuotes(event.target.value) }
            value={ props.searchValue }
          />
          
        </Box>
        
      </Container>
      { isQuotes && (
        <Box>
          <Container className={ classes.findQuoteContainer }> 
            <Box className={ classes.findQuoteBox }>
              { props.quotes.map(item => (
                <Typography key={ item }>{ item }</Typography>
              ))}
            </Box>
            <figure>
              <img
                src={ require('../assets/swanson2.jpg').default }
                alt={'Ron Swanson'}
                className={ classes.findRonImage }
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
    searchValue: state.searchValue,
    quotes: state.quotes,
    searchFeature: state.searchFeature
  }
}

export default connect(mapStateToProps, { getQuotes, searchQuotes, resetQuotes, changeFeature })(FindQuotes);