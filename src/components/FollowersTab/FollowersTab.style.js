import makeStyles from '@mui/styles/makeStyles';
import { styled } from '@mui/material/styles';
import Tab from '@mui/material/Tab';

export default makeStyles((theme) => ({
  container: {
    width: 375,
    background: theme.palette.common.black,
  },
  tabBar: {
    width: '100%',
    marginTop: 17,
  },
  panelCotainer: {
    overflow: 'auto',
    padding: '32px 16px',
    height: 'calc(100vh - 65px)',
  },
}));

export const StyledTab = styled(Tab)(() => ({
  width: '50%',
}));
