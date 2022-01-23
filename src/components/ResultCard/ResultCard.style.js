import makeStyles from '@mui/styles/makeStyles';

export default makeStyles((theme) => ({
  container: {
    width: 219,
    margin: 17,
    [theme.breakpoints.down('md')]: {
      width: 335,
      margin: '17px 0',
    },
    '& > p': {
      marginTop: 12,
      fontSize: 14.9,
    },
    '& > span': {
      fontSize: 11.17,
      color: '#B2B2B2',
    },
  },
  resultIMG: {
    width: '100%',
    height: 146,
    '& > img': {
      width: '100%',
    },
    '&> span': {
      height: 146,
    },
    [theme.breakpoints.down('md')]: {
      height: 222.67,
      '&> span': {
        height: 222.67,
      },
    },
  },
}));
