import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  box: {
    display: 'flex',
    backgroundColor: 'lightblue',
  },
  pic: {
    width: '160px',
    maxHeight: '240px',
    objectFit: 'cover',
    borderRadius: '50%',
  },
});

export default function Teacher(props) {
  const classes = useStyles();
  const { teacherProps } = props;

  return (
    <React.Fragment>

      <Grid item xs={12} sm={6}>
        <Box className={classes.box}>
          <Box m="auto">
            <img src={teacherProps.src1} alt={teacherProps.alt1} className={classes.pic} />
          </Box>
        </Box>
        <Typography component="h2" variant="h5" align="center">
          {teacherProps.name1}
        </Typography> 
        <Typography variant="subtitle1" paragraph align="left">
          {teacherProps.detail1}
        </Typography> 
      </Grid>

      <Grid item xs={12} sm={6}>
        <Box className={classes.box}>
          <Box m="auto">
            <img src={teacherProps.src2} alt={teacherProps.alt2} className={classes.pic} />
          </Box>
        </Box>
        <Typography component="h2" variant="h5" align="center">
          {teacherProps.name2}
        </Typography> 
        <Typography variant="subtitle1" paragraph align="left">
          デリオン秘密工場の工場長。デリオン名誉教授の一番弟子。オモテの顔は、デーリー東北の社員。本社 ３F にある、読者コミュニケーション部に所属し、各種イベントのお手伝い、チケットの販売などをしているっぽい。また、<a href="https://www.alec.ac.jp/news/%E3%80%8E%E3%83%A9%E3%82%BA%E3%83%99%E3%83%AA%E3%83%BC%E3%83%91%E3%82%A4%E3%80%8F%E3%81%A7%E4%BA%BA%E5%B7%A5%E7%9F%A5%E8%83%BD" target="_blank">ALEC 情報ビジネス学院の IT エンジニア科の非常勤講師</a>として活動することもあるらしい。
        </Typography> 
      </Grid>

    </React.Fragment>
  );
}
