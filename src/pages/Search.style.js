import makeStyles from '@mui/styles/makeStyles';

export default makeStyles((theme) => ({
  container: {
    paddingTop: 92,
    maxWidth: 850,
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      paddingTop: 70,
      padding: 20,
    },
    '& > h2': {
      fontSize: theme.palette.text.big,
      padding: '20px 0px',
    },
  },
  cardsContainer: {
    paddingTop: 24,
    justifyContent: 'center',
  },
}));
