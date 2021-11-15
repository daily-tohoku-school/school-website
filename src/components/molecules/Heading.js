import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
// import Typography from '@material-ui/core/Typography';

export default function Heading(props) {
  return (
    <React.Fragment>
      <Container maxWidth="lg" >
        <Box my={1} textAlign="center" fontSize="h5.fontSize">

          {/* <Typography variant="h4" component="h3" align="center">
            {props.heading}
          </Typography> */}

          {props.heading}

        </Box>
      </Container>
    </React.Fragment>
  );
}

