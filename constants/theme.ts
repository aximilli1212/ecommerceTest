import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

interface Colors {
  primary: string;
  secondary: string;
  tertiary: string;
  gray: string;
  gray2: string;
  offwhite: string;
  white: string;
  black: string;
  red: string;
  green: string;
  lightWhite: string;
}

const COLORS: Colors = {
  primary: '#243e4e',
  secondary: '#DDF0FF',
  tertiary: '#FF7754',
  gray: '#83829A',
  gray2: '#C1C0C8',
  offwhite: '#F3F4F8',
  white: '#FFFFFF',
  black: '#000000',
  red: '#e81e4d',
  green: ' #00C135',
  lightWhite: '#FAFAFC',
};

interface Sizes {
  xSmall: number;
  small: number;
  medium: number;
  large: number;
  xLarge: number;
  xxLarge: number;
  height: number;
  width: number;
}

const SIZES: Sizes = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 44,
  height,
  width,
};

interface Shadow {
  shadowColor: string;
  shadowOffset: {
    width: number;
    height: number;
  };
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
}

interface Shadows {
  small: Shadow;
  medium: Shadow;
}

const SHADOWS: Shadows = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, SIZES, SHADOWS };
