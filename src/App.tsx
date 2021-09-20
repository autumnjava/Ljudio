import Navbar from "./components/navbar/Navbar";
import AllRoutes from "./router/AllRoutes";

function App() {
  return (
    <div className="App">
      <AllRoutes />
      <Navbar/>
    </div>
  );
}

export default App;