import Navbar from "./components/navbar/Navbar";
import AllRoutes from "./router/AllRoutes";
import Player from "./components/player/Player";
import Providers from "./components/providers/Providers";
import { useEffect, useState } from "react";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  split,
  HttpLink 
} from "@apollo/client";

import { getMainDefinition } from '@apollo/client/utilities';

import { WebSocketLink } from '@apollo/client/link/ws';

const App: React.FC = () => {
  const httpLink = new HttpLink({
    uri: 'http://localhost:4000/graphql'
  });
  
  const wsLink = new WebSocketLink({
    uri: 'ws://localhost:4000/graphql',
    options: {
      reconnect: true,
      timeout: 1000,
      lazy: true,
    }
  });

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    httpLink,
  );

  const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache()
  });

  const [loggedIn, setLoggedIn] = useState<any | null>(localStorage.getItem('userId'))

  useEffect(() => {
    setLoggedIn(localStorage.getItem('userId'));
  },[localStorage.getItem('userId')])
  
  return (
    <div className="App">
    <ApolloProvider client={client}>
      <Providers>
        <AllRoutes >
          {loggedIn && <Player />}
         {loggedIn && <Navbar />}
        </AllRoutes>
      </Providers>
      </ApolloProvider>
    </div>
  );
}

export default App;