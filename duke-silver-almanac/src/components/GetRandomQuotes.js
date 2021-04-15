import React from 'react';
import { Box, Typography, Button, Container, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { getQuotes } from '../actions';

const GetRandomQuotes = (props) => {
  return (
    <>
      <Container align='center' maxWidth='lg'>
        <Box>
          <Typography variant='body1'>
            Click below for random Swanson-isms!
          </Typography>
        </Box>
        <Box>
          <Button variant='contained' color='primary' onClick={() => props.getQuotes(`${props.apiURL}${props.requestNum}`)}>Get Quotes</Button>
        </Box>
        <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
      </Container>
      {props.quotes.length && (
        <Container> 
          <Box>
            {props.quotes.map(item => (
              <Typography key={item.id}>{item}</Typography>
            ))}
          </Box>
          <figure>
            <img src={ require('../assets/swanson1.jpg').default } alt={'Ron Swanson'}></img>
            <figcaption>Ron Swanson</figcaption>
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