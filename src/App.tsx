import Navbar from "./components/navbar/Navbar";
import AllRoutes from "./router/AllRoutes";
import Player from "./components/player/Player";
import Providers from "./components/providers/Providers";
import { useEffect, useState } from "react";

const App: React.FC = () => {
  
  return (
    <div className="App">
      <Providers>
        <AllRoutes >
          <Player />
         <Navbar />
        </AllRoutes>
      </Providers>
    </div>
  );
}

export default App;