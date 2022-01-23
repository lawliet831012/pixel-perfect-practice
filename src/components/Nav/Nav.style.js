import makeStyles from '@mui/styles/makeStyles';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';

export default makeStyles((theme) => ({
  container: {
    position: 'relative',
  },
  logo: {
    zIndex: 100,
    position: 'fixed',
    top: 37,
    left: 23,
    '& > svg': {
      width: 35,
      height: 15,
    },
    [theme.breakpoints.down('md')]: {
      position: 'absolute',
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
  noTagData: {
    position: 'absolute',
    right: 10,
    top: 16,
    height: 0,
    width: 0,
    border: '2px solid #00D1FF',
    borderRadius: 1,
  },
  active: {
    '& path': {
      fill: theme.palette.common.white,
    },
    '& > p': {
      margin: 0,
      fontSize: theme.palette.text.min,
      position: 'absolute',
      bottom: 0,
    },
  },
}));

export const StyledNav = styled(List)(({ theme }) => ({
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  '& > div': {
    height: 62,
    justifyContent: 'center',
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'row',
    width: 150,
    margin: 'auto',
  },
}));
