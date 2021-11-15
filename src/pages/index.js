import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Top from '../components/templates/top';

const useStyles = makeStyles({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
});

const appBarConst = {
  title: 'デーリー東北 プログラミング教室',
  course: 'コース',
  instructor: '講師',
  reservation: 'ご予約',
  blog: 'ブログ工事中'
};

const heroConst = {
  image: 'https://source.unsplash.com/featured/?programming',
  imageText: 'main image description',
  title: '楽しく遊んでるだけで',
  description:
    "論理的思考やプログラミング・スキルが身についてしまいます。多彩な講座と厳選された教材で、「もう飽きちゃった」なんてことはありません。子供も大人も、シニアの方も「プログラミング沼」にハマってしまうでしょう。",
  linkText: 'ご予約はこちら',
};

const headingConst = [
  {
    heading: '講座のご紹介',
  },
  {
    heading: '講師',
  },
];

const reservationConst = {
  reservationTitle: '今すぐ予約しよう！',
  reservationButton: 'ご予約',
};


export default function Index() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Top
        course={appBarConst.course}
        reservation={appBarConst.reservation}
        blog={appBarConst.blog}

        image={heroConst.image}
        imageText={heroConst.imageText}
        title={heroConst.title}
        description={heroConst.description}
        linkText={heroConst.linkText}

        heading1={headingConst[0].heading}
        heading2={headingConst[1].heading}

        reservationTitle={reservationConst.reservationTitle}
        reservationButton={reservationConst.reservationButton}
      />


    </React.Fragment>
  );
}
