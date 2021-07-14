import { modularScale } from 'polished';

const Theme = {
  colors: {
    accent: '#0880ae',
    warning: '#f2ac57',
    success: '#14a38b',
    error: '#ff7171',
    primary: '#2c2738',
    secondary: '#756f86',
    muted: '#7c9cbf',
    bright: '#ffffff',
    shade: '#dbe2ea',
    tint: '#ebf4f8',
    gray: '#979797',
    hover: {
      main: '#650194',
      white: '#FFFFFF',
      dark: '#888',
      gray: '#ccc',
      success: '#4DD47A',
      error: '#b53232'
    }
  },
  boxShadow:
    '0px 2px 4px rgba(44, 39, 56, 0.08), 0px 4px 8px rgba(44, 39, 56, 0.08)',
  typo: {
    fonts: {
      default: 'IBMPlexSans-Regular, sans-serif',
      secondary: 'Arial, sans-serif'
    },
    weights: {
      light: 300,
      medium: 500,
      regular: 400,
      bold: 700,
      black: 900
    }
  },
  zIndex: {
    bottom: 1000,
    middleBottom: 1100,
    middle: 1300,
    middleTop: 1400,
    top: 1500
  },
  ms: step => modularScale(step, '1rem', 'majorSecond'),
  breakpoints: {
    sm: 550,
    md: 992,
    lg: 1400
  }
};

export default Theme;
