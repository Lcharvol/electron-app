import colors from '@/colors';

const family = 'Avenir, Arial';
const sizes = {
  xxl: '2.6rem',
  xl: '2.2rem',
  l: '1.8rem',
  m: '1.4rem',
  s: '1.2rem',
  xs: '0.8rem',
  xxs: '0.6rem',
  xxxs: '0.5rem',
};

export type WeightProps = 'light' | 'roman' | 'heavy';

const weightMap: Record<WeightProps, number> = {
  light: 100,
  roman: 500,
  heavy: 800,
};

function convertToMuiTypography() {
  return {
    h1: { fontSize: '64px', color: colors.white },
    h2: { fontSize: '48px', color: colors.white },
    h3: { fontSize: '36px', color: colors.white },
    h4: { fontSize: '32px', color: colors.white },
    h5: { fontSize: '26px', color: colors.white },
    h6: { fontSize: '24px', color: colors.white },
  };
}

export default {
  family,
  sizes,
  weightMap,
  convertToMuiTypography,
};
