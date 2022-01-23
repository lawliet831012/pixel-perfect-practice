import makeStyles from '@mui/styles/makeStyles';

export default makeStyles((theme) => ({
  container: {
    position: 'relative',
  },
  logo: {
    zIndex: 100,
    position: 'absolute',
    top: 37,
    left: 23,
    [theme.breakpoints.down('md')]: {
      top: 28,
      left: 21,
    },
  },
  navBar: {
    zIndex: 99,
    position: 'fixed',
    paddingTop: 88,
    width: 80,
    height: '100vh',
    background: theme.palette.common.black,
    [theme.breakpoints.down('md')]: {
      paddingTop: 0,
      bottom: 0,
      width: '100%',
      height: 66,
    },
  },
  navButtons: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'row',
    },
  },
  active: {
    '& path': {
      fill: theme.palette.common.white,
    },
  },
}));
