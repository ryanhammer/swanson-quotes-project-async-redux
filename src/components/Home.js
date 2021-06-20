import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

import GetRandomQuotes from './GetRandomQuotes';
import FindQuotes from './FindQuotes';

const Home = (props) => {
  return (
    <div>
      <Container maxWidth='lg'>
        <Typography align='center' variant='h1' gutterBottom={true}>
          Duke Silver's Almanac
        </Typography>
        <Typography align='center' variant='h5' gutterBottom={true}>
          Enjoyable aphorisms from everyone's favorite mustachioed libertarian public servant
        </Typography>
      </Container>
      { props.searchFeature ? <FindQuotes /> : <GetRandomQuotes/> }
      
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    searchFeature: state.searchFeature,
  }
}

export default connect(mapStateToProps, { })(Home);

