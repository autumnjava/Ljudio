import Navbar from "./components/navbar/Navbar";
import AllRoutes from "./router/AllRoutes";
import { BrowserRouter as Router } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <AllRoutes >       
        <Navbar />
      </AllRoutes>
    </div>
  );
}

export default App;