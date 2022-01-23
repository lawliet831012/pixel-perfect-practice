import makeStyles from '@mui/styles/makeStyles';

export default makeStyles((theme) => ({
  container: {
    maxWidth: 875,
    margin: 'auto',
    paddingTop: 80,
    [theme.breakpoints.down('md')]: {
      paddingTop: 70,
      padding: 20,
    },
    '& > h2': {
      marginBottom: 24,
      fontSize: 30,
      [theme.breakpoints.down('md')]: {
        fontSize: theme.palette.text.big,
      },
    },
  },
}));
