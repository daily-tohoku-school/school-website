import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '../organisms/AppBar';
// import Hero from '../organisms/Hero';
import Heading from '../molecules/Heading';
import SummaryList from '../organisms/SummaryList';
import TeacherList from '../organisms/TeacherList';
import Reservation from '../organisms/Reservation';
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

      {/* <Hero
        image={props.image}
        imageText={props.imageText}
        title={props.title}
        description={props.description}
        linkText={props.linkText}
      /> */}

      {/* <Heading heading={props.heading1} />
      <SummaryList />

      <Heading heading={props.heading2} />
      <TeacherList />

      <Reservation reservationTitle={props.reservationTitle} reservationButton={props.reservationButton} /> */}


      <iframe src="https://select-type.com/rsv/?id=Azh6XvffLto&w_flg=1" width="100%" height="800" frameBorder="0">
      </iframe>


      <Footer />

    </React.Fragment>
  );
}

