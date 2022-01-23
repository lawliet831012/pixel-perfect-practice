import makeStyles from '@mui/styles/makeStyles';

export default makeStyles(() => ({
  container: {
    maxWidth: 875,
    margin: 'auto',
    paddingTop: 80,
    '& > h2': {
      marginBottom: 24,
      fontSize: 30,
    },
  },
}));
