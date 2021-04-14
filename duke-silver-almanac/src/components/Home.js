import React from 'react';
import { Container, Typography } from '@material-ui/core';

import GetRandomQuotes from './GetRandomQuotes';

export default function Home() {
  return (
    <>
      <Container maxWidth='lg'>
        <Typography align='center' variant='h1'>Duke Silver's Almanac</Typography>
        <Typography align='center' variant='h5'>Enjoyable aphorisms from everyone's favorite mustachioed libertarian public servant</Typography>
      </Container>
      <GetRandomQuotes/>
    </>
  )
}