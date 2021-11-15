import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  heroImage: {
    position: 'relative',
    backgroundColor: '#ccc',
    color: '#fff',
    // marginBottom: 40,
    marginBottom: 15,
    backgroundImage: 'url(https://source.unsplash.com/featured/?programming)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  heroImageContent: {
    position: 'relative',
    padding: 30,
  },
});

export default function Hero(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.heroImage} style={{ backgroundImage: `url(${props.image})` }}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={props.image} alt={props.imageText} />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.heroImageContent}>
            <Typography component="h1" variant="h4" color="inherit" gutterBottom>
              {props.title}
            </Typography>
            <Typography variant="h6" color="inherit" paragraph>
              {props.description}
            </Typography>
            <Link variant="subtitle1" href="/rsv" underline="none">
              <Button variant="contained" color="primary">
                {props.linkText}
              </Button>
            </Link>
          </div>
        </Grid>
      </Grid>

    </Paper>
  );
}

