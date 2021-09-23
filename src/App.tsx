import Navbar from "./components/navbar/Navbar";
import AllRoutes from "./router/AllRoutes";
import MiniPlayer from "./components/miniPlayer/MiniPlayer";
import Providers from "./components/providers/Providers";

const App: React.FC = () => {
  return (
    <div className="App">
      <Providers>
        <AllRoutes >
          <MiniPlayer/>
          <Navbar />
        </AllRoutes>
      </Providers>
    </div>
  );
}

export default App;