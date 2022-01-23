import makeStyles from '@mui/styles/makeStyles';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export default makeStyles(() => ({
  container: {},
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  width: 343,
  height: 40,
  fontWeight: 'bold',
  fontSize: theme.palette.text.small,
}));
