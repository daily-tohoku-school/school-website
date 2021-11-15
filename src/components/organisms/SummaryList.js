import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Summary from '../molecules/Summary';

const summaryConst = {
  title1: '８月は納涼ドローン祭り: 第一弾は「夏休み学びパーク」',
  description1:
    '開催日: ８月１日（日）',
  image1: 'https://source.unsplash.com/featured/?drone',
  title2: '９月はマイクラ強化月間',
  description2:
    '詳細につきましては、近日中にアップいたします。しばらくお待ちください。',
  image2: 'https://source.unsplash.com/featured/?minecraft',
  title3: '10月はレゴの秋',
  description3:
    '詳細につきましては、近日中にアップいたします。しばらくお待ちください。',
  image3: 'https://source.unsplash.com/featured/?lego',
  title4: '平日限定: シニアのための IT なんでも相談室',
  description4:
    '詳細につきましては、近日中にアップいたします。しばらくお待ちください。',
  image4: 'https://source.unsplash.com/featured/?smartphone',
  title5: '平日限定: （幼児コース）小学校進学前のプログラミング',
  description5:
    '詳細につきましては、近日中にアップいたします。しばらくお待ちください。',
  image5: 'https://source.unsplash.com/featured/?kindergarten',
  title6: '平日限定: 悩める先生のためのプログラミング相談室',
  description6:
    '詳細につきましては、近日中にアップいたします。しばらくお待ちください。',
  image6: 'https://source.unsplash.com/featured/?school',
};

export default function SummaryList(props) {
  return (
    <React.Fragment>
      <Container maxWidth="lg" >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {/* {summaryConst.map((summaryConst) => (
              <Summary key={summaryConst.title} summaryProps={summaryConst} />
            ))} */}
            <Summary summaryProps={summaryConst} />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

