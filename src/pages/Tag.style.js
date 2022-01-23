import makeStyles from '@mui/styles/makeStyles';

export default makeStyles((theme) => ({
  container: {
    maxWidth: 875,
    margin: 'auto',
    paddingTop: 84,
    [theme.breakpoints.down('md')]: {
      paddingTop: 90,
    },
    '& > h2': {
      marginBottom: 24,
      marginLeft: 8,
      fontSize: 30,
      [theme.breakpoints.down('md')]: {
        fontSize: theme.palette.text.big,
        paddingLeft: 12,
      },
    },
  },
}));
