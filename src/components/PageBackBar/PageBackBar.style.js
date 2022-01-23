import makeStyles from '@mui/styles/makeStyles';

export default makeStyles(() => ({
  container: {
    height: 45,
    fontSize: 30,
    display: 'flex',
    '& > button': {
      marginRight: 23,
    },
  },
}));
