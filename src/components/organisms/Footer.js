import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import Copyright from '../molecules/Copyright';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Footer(props) {
  const classes = useStyles();

  return (
    <React.Fragment>

      <Box bgcolor="lightgrey" p={2} className={classes.root}>

        <Box display="flex" justifyContent="center" m={1} p={1}>
          <Box p={1}>
            <Link variant="button" color="textPrimary" href="https://delion-dt.com/" className={classes.linkMargin} rel="noopener" target="_blank">
              <img src='/images/no_img2.png' width='38' alt='デリオンくらぶ' />
            </Link>
          </Box>
          <Box p={1}>
            <Link variant="button" color="textPrimary" href="https://twitter.com/VLpNb0d2usK5N9n" className={classes.linkMargin} rel="noopener" target="_blank">
              <TwitterIcon fontSize="large" />
            </Link>
          </Box>
          <Box p={1}>
            <Link variant="button" color="textPrimary" href="https://github.com/daily-tohoku-school/school-website" className={classes.linkMargin} rel="noopener" target="_blank">
              <GitHubIcon fontSize="large" />
            </Link>
          </Box>
        </Box>



        <Divider />

        <Box m={2}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={3}>
              <Typography align="center">
                <Link variant="button" color="textSecondary" href="https://www.daily-tohoku.company/" rel="noopener" target="_blank">
                  会社概要
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography align="center">
                <Link variant="button" color="textSecondary" href="https://www.daily-tohoku.company/guide-terms" rel="noopener" target="_blank">
                  著作権
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography align="center">
                <Link variant="button" color="textSecondary" href="https://www.daily-tohoku.news/personal-info" rel="noopener" target="_blank">
                  プライバシーポリシー
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography align="center">
                <Link variant="button" color="textSecondary" href="https://www.daily-tohoku.news/sct" rel="noopener" target="_blank">
                  特定商取引法表示
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Divider />

        <Box m={2}>
          <Copyright />
        </Box>

      </Box>
 




    </React.Fragment>
  );
}

