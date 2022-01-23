import makeStyles from '@mui/styles/makeStyles';

export default makeStyles((theme) => ({
  pageContainer: {
    width: '100%',
    position: 'relative',
  },
  navBar: {
    position: 'absolute',
    height: '100vh',
    left: 0,
    top: 0,

  },
  outlet: {
    [theme.breakpoints.down('md')]: {
      paddingTop: 70,
      paddingBottom: 66,
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: 80,
    },
    [theme.breakpoints.up('lg')]: {
      paddingRight: 375,
    },
  },
  friendsTab: {
    position: 'absolute',
    height: '100vh',
    right: 0,
    top: 0,
  },
}));
