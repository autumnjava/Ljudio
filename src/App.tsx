import Navbar from "./components/navbar/Navbar";
import AllRoutes from "./router/AllRoutes";
import Player from "./components/player/Player";
import Providers from "./components/providers/Providers";
import { useEffect, useState } from "react";

const App: React.FC = () => {

  const [loggedIn, setLoggedIn] = useState<any | null>(localStorage.getItem('userId'))

  useEffect(() => {
    setLoggedIn(localStorage.getItem('userId'));
  },[localStorage.getItem('userId')])
  
  return (
    <div className="App">
      <Providers>
        <AllRoutes >
          {loggedIn && <Player />}
         {loggedIn && <Navbar />}
        </AllRoutes>
      </Providers>
    </div>
  );
}

export default App;