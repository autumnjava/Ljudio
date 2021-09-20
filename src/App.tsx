import Navbar from "./components/navbar/Navbar";
import AllRoutes from "./router/AllRoutes";

const App: React.FC = () => {
  return (
    <div className="App">
      <AllRoutes />
      <Navbar/>
    </div>
  );
}

export default App;