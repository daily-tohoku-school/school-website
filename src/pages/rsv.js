import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Default from '../components/templates/default';

const useStyles = makeStyles({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
});

// const appBarConst = {
//   title: 'デーリー東北 プログラミング教室',
//   course: 'コース',
//   instructor: '講師',
//   reservation: 'お申込み',
//   blog: 'ブログ工事中'
// };

// const heroConst = {
//   image: 'https://source.unsplash.com/featured/?programming',
//   imageText: 'main image description',
//   title: '楽しく遊んでるだけで',
//   description:
//     "論理的思考やプログラミング・スキルが身についてしまいます。多彩な講座と厳選された教材で、「もう飽きちゃった」なんてことはありません。子供も大人も、シニアの方も「プログラミング沼」にハマってしまうでしょう。",
//   linkText: 'お申込みはこちら',
// };

// const headingConst = [
//   {
//     heading: 'コース概要',
//   },
//   {
//     heading: '講師',
//   },
// ];

// const reservationConst = {
//   reservationTitle: '今すぐ申し込もう！',
//   reservationButton: '申し込み',
// };


export default function Rsv() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Default 
        // course={appBarConst.course}
        // reservation={appBarConst.reservation}
        // blog={appBarConst.blog}
        // image={heroConst.image}
        // imageText={heroConst.imageText}
        // title={heroConst.title}
        // description={heroConst.description}
        // linkText={heroConst.linkText}
        // heading1={headingConst[0].heading}
        // heading2={headingConst[1].heading}
        // reservationTitle={reservationConst.reservationTitle}
        // reservationButton={reservationConst.reservationButton}
      />


    </React.Fragment>
  );
}
