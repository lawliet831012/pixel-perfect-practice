import makeStyles from '@mui/styles/makeStyles';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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
      [theme.breakpoints.down('md')]: {
        marginTop: 218,
      },
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: 70,
    },
  },
  resultNumber: {
    marginRight: 10,
    fontSize: theme.palette.text.large,
  },
}));

export const StyledInput = styled(TextField)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    marginBottom: 28,
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: 335,
  maxWidth: 343,
  fontWeight: 'bold',
  fontSize: theme.palette.text.small,
  [theme.breakpoints.down('md')]: {
    position: 'fixed',
    bottom: 90,
  },
}));
