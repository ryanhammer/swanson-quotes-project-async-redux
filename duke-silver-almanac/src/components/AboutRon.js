import React from 'react';
import { Container, Typography } from '@material-ui/core'

export default function AboutRon() {
  return (
    <Container maxWidth='lg'>
      <Typography variant='h2' gutterBottom={true}>About Ron</Typography>
      <Typography variant='body1'>
        Ronald Ulysses "Ron" Swanson is a fictional character portrayed by Nick Offerman in the NBC comedy-drama Parks and Recreation. He is the former husband of two women by the name of Tammy Swanson and is the current husband of Diane Swanson.
      </Typography>
      <br/>
      <Typography variant='body1'>
        He was Leslie Knope's deadpan superior as the head of the Pawnee Parks and Recreation Department until she left the department to become a city councilor, and then again when she rejoined the department after she was recalled. In late 2014, he quit the Parks department and started Very Good Building and Development Co. 
      </Typography>
      <br/>
      <Typography variant='body1'>
        (Source: Parks and Recreation Fandom Wikia)
      </Typography>
    </Container>
  )
}