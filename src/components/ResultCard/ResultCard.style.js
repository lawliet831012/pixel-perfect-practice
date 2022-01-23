import makeStyles from '@mui/styles/makeStyles';

export default makeStyles(() => ({
  container: {
    width: 219,
    margin: 17,
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
  },
}));
