import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import LandingPage from "../pages/landingPage/LandingPage";
import MyPlaylistsPage from "../pages/myPlaylistsPage/MyPlaylistsPage";
import PlaylistPage from "../pages/playlistPage/PlaylistPage";
import RegisterPage from "../pages/registerPage/RegisterPage";


const AllRoutes = () => {
  return(
    <Router>
      <Switch>
        <Route path="/" exact={true} component={LandingPage} />
        <Route path="/register" exact={true} component={RegisterPage} />
        <Route path="/home" exact={true} component={HomePage} />
        <Route path="/myPlaylist" exact={true} component={MyPlaylistsPage} />
        <Route path="/playlist/:id" exact={true} component={PlaylistPage} />
      </Switch>
    </Router>
  )
}

export default AllRoutes;