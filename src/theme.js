import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#181818',
    },
    common: {
      white: '#ffffff',
      black: '#1B1B1B',
    },
    text: {
      primary: '#ffffff',
      secondary: '#BFBFBF',
      large: 48,
      big: 24,
      medium: 16,
      small: 14,
      min: 12,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          border: '2px solid #ffffff',
          borderRadius: 4,
          background: '#ffffff',
          color: '#121212',
          '&:hover': {
            background: '#121212',
            color: '#ffffff',
          },
        },
        outlined: {
          border: '2px solid #ffffff',
          borderRadius: 20,
          color: '#ffffff',
          background: '#121212',
          '&:hover': {
            background: '#ffffff',
            color: '#121212',
          },
        },
        contained: {
          border: '2px solid #ffffff',
          borderRadius: 20,
          background: '#ffffff',
          '&:hover': {
            background: '#121212',
            color: '#ffffff',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          input: {
            border: '3px solid #FFFFFF80',
            borderRadius: 6,
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {

        },
        track: {
          height: 8,
          border: 'none',
          backgroundImage: 'linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)',
        },
        thumb: {
          height: 24,
          width: 24,
          color: '#1B1B1B',
          border: '6px solid #FFD05D',
          borderRadius: '50%',
        },
        rail: {
          color: '#FFFFFF80',
        },
        mark: {
          display: 'none',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          borderBottom: '2px solid #1F1F1F',
        },
        indicator: {
          height: 2,
          background: '#ffffff',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: 16,
          color: '#929292',
          '&.Mui-selected': {
            color: '#ffffff',
          },
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          subtitle1: 'h3',
          subtitle2: 'h3',
          body1: 'p',
          body2: 'span',
        },
      },
    },
  },
  typography: {
    fontFamily: [
      'Ubuntu',
      'sans-serif',
    ].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 960,
      lg: 1440,
      xl: 1920,
    },
  },
});

export default theme;
