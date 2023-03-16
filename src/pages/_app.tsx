import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyles } from 'styles';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />

      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
