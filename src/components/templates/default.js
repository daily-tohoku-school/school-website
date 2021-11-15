import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '../organisms/AppBar';
import Footer from '../organisms/Footer';

const useStyles = makeStyles({
  pic: {
    width: '160px',
    maxHeight: '240px',
    objectFit: 'cover',
    borderRadius: '50%',
  },
});

export default function Default(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar
        course={props.course}
        reservation={props.reservation}
        blog={props.blog}
      />

      <iframe src="https://select-type.com/rsv/?id=Azh6XvffLto&w_flg=1" width="100%" height="800" frameBorder="0">
      </iframe>

      <Footer />

    </React.Fragment>
  );
}

