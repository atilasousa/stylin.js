import '@/styles/globals.css';

import { ThemeProvider } from '@stylin.js/react';
import type { AppProps } from 'next/app';

import theme from '@/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}