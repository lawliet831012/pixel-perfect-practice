import makeStyles from '@mui/styles/makeStyles';

export default makeStyles((theme) => ({
  container: {
    width: 174,
    padding: 12,
    '& > p': {
      width: '100%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
  cardBackground: {
    height: 150,
    width: '100%',
    position: 'relative',

    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      borderRadius: 10,
      opacity: 0.06,
      background: theme.palette.common.white,
    },
    '& > h2': {
      position: 'absolute',
      margin: 14,
      padding: '7px 14px',
      bottom: 0,
      left: 0,
      width: 122,
      fontSize: theme.palette.text.big,
      fontWeight: 700,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      border: `4px solid ${theme.palette.common.white}`,
      borderRadius: 10,
    },
  },
}));
