import makeStyles from '@mui/styles/makeStyles';

export default makeStyles((theme) => ({
  container: {
    paddingTop: 92,
    maxWidth: 825,
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      paddingTop: 72,
      padding: 20,
    },
    '& > h2': {
      fontSize: theme.palette.text.big,
      padding: '20px 0px',
    },
    '& > button': {
      marginTop: 10,
      marginLeft: 50,
      [theme.breakpoints.down('md')]: {
        marginLeft: 0,
      },
    },
  },
  cardsContainer: {
    paddingTop: 24,
    [theme.breakpoints.down('md')]: {
      paddingTop: 0,
    },
    justifyContent: 'center',
  },
}));
