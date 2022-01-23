import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

function useCheckScreen(size, compare) {
  const theme = useTheme();
  const result = useMediaQuery(theme.breakpoints[compare](size));

  return result;
}

export default useCheckScreen;
