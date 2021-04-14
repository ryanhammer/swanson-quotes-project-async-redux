import React from 'react';
import { Box, Typography, Button, Container } from '@material-ui/core';
import { connect } from 'react-redux';

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
          <Button variant='contained' color='primary'>Get Quotes</Button>
        </Box>
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
    quotes: state.quotes
  }
}

export default connect(mapStateToProps, {})(GetRandomQuotes);