import { AppProps } from 'next/app';
import GlobalStyles from 'styles/GlobalStyles';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyles />
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  </>
);

export default App;
