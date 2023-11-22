//theme.ts
import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
  }
}
export const theme: DefaultTheme = {
  bgColor: '#2f3640',
  textColor: '#f5f6fa',
  accentColor: '#4cd137',
};
