import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  pic: {
    width: '100%',
    maxHeight: '240px',
    objectFit: 'cover',
  },
});

export default function Summary(props) {
  const classes = useStyles();
  const { summaryProps } = props;

  return (
    <React.Fragment>
 
      <Box ml={5} mt={0} mr={5} mb={5}>
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={8}>
                <Typography component="h2" variant="h5">
                  {summaryProps.title1}
                </Typography>
                <Divider variant="middle" />
                <Typography component="div">
                  <Box lineHeight="normal" ml={1} mt={1} mb={1} color="secondary.main" fontWeight="fontWeightBold" fontSize="h6.fontSize">
                    完売御礼！
                  </Box>
                  <Box lineHeight="normal" ml={1} mb={2} fontSize="h6.fontSize" fontWeight="fontWeightBold">
                    プログラミングでドローンを飛ばそう！（夏休み学びパーク・バージョン）
                  </Box>
                  <Box lineHeight="normal" ml={1} mb={2}>
                    ドローンといえば、DJI 社の「Phantom」が有名。その DJI 社の協力で開発された、Ryze Tech 社の「Tello」という小型ドローンを講座で使用します。簡単なプログラムを作成し、おうちでも飛ばせるドローンを自動操縦してみましょう！
                  </Box>
                  <Box lineHeight="normal" ml={1}>
                    <Box component="span" m={1} fontWeight="fontWeightBold">
                      [開催日] 
                    </Box>
                    ８月１日（日）
                  </Box>
                  <Box lineHeight="normal" ml={1}>
                    <Box component="span" m={1} fontWeight="fontWeightBold">
                      [会場] 
                    </Box>
                    デーリー東北 ６階小ホール
                  </Box>
                  {/* <Box lineHeight="normal" ml={1}>
                    <Box component="span" m={1} fontWeight="fontWeightBold">
                      [受講時間]
                    </Box>
                    １時間（午前２回、午後３回、各回親子２組までの少人数制）
                  </Box>
                  <Box lineHeight="normal" ml={1}>
                    <Box component="span" m={1} fontWeight="fontWeightBold">
                      [時間割]
                    </Box>
                    9:30-10:30、11:00-12:00、13:30-14:30、15:00-16:00、16:30-17:30
                  </Box>
                  <Box lineHeight="normal" ml={1}>
                    <Box component="span" m={1} fontWeight="fontWeightBold">
                      [受講料]
                    </Box>
                    2,000円
                  </Box>
                  <Box lineHeight="normal" ml={1}>
                    <Box component="span" m={1} fontWeight="fontWeightBold">
                      [持ち物]
                    </Box>
                    なし（ドローン、パソコンは各親子に１台ずつご用意いたします）
                  </Box>
                  <Box lineHeight="normal" ml={1}>
                    <Box component="span" m={1} fontWeight="fontWeightBold">
                      [対　象]
                    </Box>
                    小学生
                  </Box>
                  <Box lineHeight="normal" ml={1}>
                    <Box component="span" m={1} fontWeight="fontWeightBold">
                      [定　員]
                    </Box>
                    親子 10 組
                  </Box>*/}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <img src={summaryProps.image1} className={classes.pic} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>

      {/* <Box m={5}>
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={8}>
                <Typography component="h2" variant="h5">
                ８月は納涼ドローン祭り: 第二弾は個別指導の限定講座！
                </Typography>
                <Divider variant="middle" />
                <Box lineHeight="normal" ml={1} mt={1} mb={1} color="secondary.main" fontWeight="fontWeightBold">
                    予約フォームは近日中に公開いたします。しばらくお待ちください。
                  </Box>
                <Typography component="div">
                  <Box lineHeight="normal" ml={1} mt={1} mb={2} fontSize="h6.fontSize" fontWeight="fontWeightBold">
                    プログラミングでドローンを飛ばそう！
                  </Box>
                  <Box lineHeight="normal" ml={1} mb={2}>
                    「夏休み学びパーク」バージョンと基本的な構成は同じですが、各回の定員は親子１組の個別指導となります。三密は避けつつ、講座自体の内容は、とっても密度の濃いものとなる予定です。早々に完売となった「夏休み学びパーク」バージョンを受講することのできなかった方におすすめです。
                  </Box>
                  <Box lineHeight="normal" ml={1}>
                    <Box component="span" m={1} fontWeight="fontWeightBold">
                      [開催日] 
                    </Box>
                    ８月８日（日）、８月29日（日）
                  </Box>
                  <Box lineHeight="normal" ml={1}>
                    <Box component="span" m={1} fontWeight="fontWeightBold">
                      [会場] 
                    </Box>
                    デーリー東北 １階 DT ホール（８月８日）、デーリー東北 ６階小ホール（８月29日）
                  </Box>
                  <Box lineHeight="normal" ml={1}>
                    <Box component="span" m={1} fontWeight="fontWeightBold">
                      [受講時間]
                    </Box>
                    １時間（各日にち午前１回、午後２回、各回親子１組の個別指導）
                  </Box>
                  <Box lineHeight="normal" ml={1}>
                    <Box component="span" m={1} fontWeight="fontWeightBold">
                      [時間割]
                    </Box>
                    10:00-11:00、13:00-14:00、15:00-16:00
                  </Box>
                  <Box lineHeight="normal" ml={1}>
                    <Box component="span" m={1} fontWeight="fontWeightBold">
                      [受講料]
                    </Box>
                    3,600円
                  </Box>
                  <Box lineHeight="normal" ml={1}>
                    <Box component="span" m={1} fontWeight="fontWeightBold">
                      [持ち物]
                    </Box>
                    なし（ドローン、パソコンはご用意いたします）
                  </Box>
                  <Box lineHeight="normal" ml={1}>
                    <Box component="span" m={1} fontWeight="fontWeightBold">
                      [対　象]
                    </Box>
                    小学生
                  </Box>
                  <Box lineHeight="normal" ml={1}>
                    <Box component="span" m={1} fontWeight="fontWeightBold">
                      [定　員]
                    </Box>
                    各回 親子 1 組
                  </Box>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <img src={summaryProps.image1} className={classes.pic} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box> */}

      {/* <Box m={5}>
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={8}>
                <Typography component="h2" variant="h5">
                  {summaryProps.title2}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {summaryProps.description2}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <img src={summaryProps.image2} className={classes.pic} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box> */}

      {/* <Box m={5}>
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={8}>
                <Typography component="h2" variant="h5">
                  {summaryProps.title3}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {summaryProps.description3}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <img src={summaryProps.image3} className={classes.pic} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box> */}

      {/* <Box m={5}>
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={8}>
                <Typography component="h2" variant="h5">
                  {summaryProps.title4}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {summaryProps.description4}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <img src={summaryProps.image4} className={classes.pic} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box> */}

      {/* <Box m={5}>
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={8}>
                <Typography component="h2" variant="h5">
                  {summaryProps.title5}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {summaryProps.description5}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <img src={summaryProps.image5} className={classes.pic} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box> */}

      {/* <Box m={5}>
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={8}>
                <Typography component="h2" variant="h5">
                  {summaryProps.title6}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {summaryProps.description6}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <img src={summaryProps.image6} className={classes.pic} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box> */}

    </React.Fragment>
  );
}

