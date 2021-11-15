import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

export default function Heading(props) {
  return (
    <React.Fragment>
      <Container maxWidth="lg" >
        <Box my={1} textAlign="center" fontSize="h5.fontSize">

          {props.heading}

        </Box>
      </Container>
    </React.Fragment>
  );
}

