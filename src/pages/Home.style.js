import makeStyles from '@mui/styles/makeStyles';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export default makeStyles((theme) => ({
  container: {
    margin: 'auto',
    padding: '54px 20px 0',
    maxWidth: 765,
    '& h2': {
      fontSize: theme.palette.text.big,
      marginBottom: 20,
    },
    '& > p': {
      fontSize: theme.palette.text.medium,
      marginBottom: 20,
    },
    '& hr': {
      margin: '30px 0',
    },
  },
  input: {
    marginBottom: 30,
  },
  resultNumber: {
    marginRight: 10,
    fontSize: theme.palette.text.large,
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  position: 'fixed',
  bottom: 87,
  width: 343,
  fontWeight: 'bold',
  fontSize: theme.palette.text.small,
}));
