import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import client from '../utils/apollo-client';
import '../styles/globals.scss';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </ApolloProvider>
  )
}

export default MyApp
