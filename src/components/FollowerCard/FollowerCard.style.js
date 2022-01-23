import makeStyles from '@mui/styles/makeStyles';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom: 12.5,
    '& > button': {
      '& > span': {
        fontSize: theme.palette.text.min,
        fontWeight: 'normal',
      },
    },
  },
  avater: {
    height: 40,
    width: 40,
    borderRadius: 5,
    border: '1px solid #F8F8F8',
  },
  name: {
    padding: '0 15px',
    flexGrow: 1,
    '& p': {
      fontSize: theme.palette.text.medium,
    },
    '& span': {
      fontSize: theme.palette.text.small,
      opacity: 0.5,
    },
  },
}));

export const StyledButton = styled(Button)(() => ({
  height: 29,
  padding: '8px 10px',
}));
