import makeStyles from '@mui/styles/makeStyles';

export default makeStyles((theme) => ({
  container: {
    height: 45,
    fontSize: 30,
    [theme.breakpoints.down('md')]: {
      position: 'fixed',
      top: 0,
      left: 0,
      height: 70,
      width: '100vh',
      fontSize: 24,
      zIndex: 10,
      background: '#181818',
    },
    display: 'flex',
    alignItems: 'center',
    '& > button': {
      marginRight: 23,
      [theme.breakpoints.down('md')]: {
        marginLeft: 23,
        marginRight: 8,
      },
    },
  },
}));
