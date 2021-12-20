import { generateMedia } from 'styled-media-query';

const BREAKPOINT_XS = 480;
const BREAKPOINT_SM = 576;
const BREAKPOINT_MD = 768;
const BREAKPOINT_LG = 992;
const BREAKPOINT_XL = 1366;
const BREAKPOINT_XXL = 1600;

export const media = generateMedia({
  xs: `${BREAKPOINT_XS}px`,
  sm: `${BREAKPOINT_SM}px`,
  md: `${BREAKPOINT_MD}px`,
  lg: `${BREAKPOINT_LG}px`,
  xl: `${BREAKPOINT_XL}px`,
  xxl: `${BREAKPOINT_XXL}px`,
});

const theme = {
  fontFamily: 'Poppins',
  primary: '#EF4444',
  secondary: '#3B82F6',
  tertiary: '#DDDDDD',
  background: '#FFFFFF',
  borderColor: '#F9FAFB',
  margin: '2rem',
  borderRadius: '10px',
};

export default theme;
