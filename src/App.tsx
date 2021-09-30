import Navbar from "./components/navbar/Navbar";
import AllRoutes from "./router/AllRoutes";
import Player from "./components/player/Player";
import Providers from "./components/providers/Providers";
import { useEffect, useState } from "react";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const App: React.FC = () => {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
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