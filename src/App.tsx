import Navbar from "./components/navbar/Navbar";
import AllRoutes from "./router/AllRoutes";
import MiniPlayer from "./components/miniPlayer/MiniPlayer";

const App: React.FC = () => {
  return (
    <div className="App">
      <AllRoutes >
        <MiniPlayer/>
        <Navbar />
      </AllRoutes>
    </div>
  );
}

export default App;