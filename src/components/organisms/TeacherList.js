import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Teacher from '../molecules/Teacher';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

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

const teacherConst = {
  src1: '/images/professor.jpg',
  alt1: 'デリオン名誉教授',
  name1: 'デリオン名誉教授',
  detail1: 'デーリー東北プログラミング教室のプロデューサー。オモテの顔は新聞記者。世の中をより良くするための IT 技術開発にいそしむウラの顔を持つ「仕事人」。取材がない日は、オーナーでもあるデリオン秘密工場で研究開発をしている。プログラミング教室では、名誉教授として登壇することも、たまにあるかも。',
  src2: '/images/helmet.jpg',
  alt2: '工場長',
  name2: '工場長',
  // detail2: 'デリオン秘密工場の工場長。デリオン名誉教授の一番弟子。オモテの顔は、デーリー東北の３Fにある、読者コミュニケーション部に所属するサラリーマン。各種イベントのお手伝い、チケットの販売などをしている。また、ALEC 情報ビジネス学院の IT エンジニア科の非常勤講師として活動することもある。',
};

export default function TeacherList(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="lg" >
        <Box m={5}>
          <Card>
            <CardContent>
              <Grid container spacing={10}>
                <Teacher teacherProps={teacherConst} />
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </React.Fragment>
  );
}
