import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default function Reservation(props) {
  return (
    <React.Fragment>
      <Box bgcolor="lightblue" p={5}>
        <Typography component="h2" variant="h5" align="center">
          {props.reservationTitle}
        </Typography>
        <Box textAlign="center" my={2}>
          <Button href="/rsv" color="primary" variant="outlined">
            {props.reservationButton}
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
}

