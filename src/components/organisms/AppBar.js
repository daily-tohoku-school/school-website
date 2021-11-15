import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  toolbarTitle: {
    flex: 1,
  },
});

export default function CompAppBar(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar>
          <Typography variant="h5" color="textPrimary" align="center" className={classes.toolbarTitle}>
            <Link href="/"  color="inherit" underline="none">
              デーリー東北プログラミング教室 と 夏休み学びパーク
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

