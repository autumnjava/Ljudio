import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import LandingPage from "../pages/landingPage/LandingPage";
import MyPlaylistsPage from "../pages/myPlaylistsPage/MyPlaylistsPage";
import PlaylistPage from "../pages/playlistPage/PlaylistPage";
import RegisterPage from "../pages/registerPage/RegisterPage";
import SearchPage from "../pages/searchPage/SearchPage";


interface Props {
  children: JSX.Element
}

const AllRoutes: React.FC<Props> = ({children}: Props) => {
  return(
    <Router>
      {children}
      <Switch>
        <Route path="/" exact={true} component={LandingPage} />
        <Route path="/register" exact={true} component={RegisterPage} />
        <Route path="/home" exact={true} component={HomePage} />
        <Route path="/myPlaylist" exact={true} component={MyPlaylistsPage} />
        <Route path="/playlist/:id" exact={true} component={PlaylistPage} />
        <Route path="/search" exact={true} component={SearchPage} />
      </Switch>
    </Router>
  )
}

export default AllRoutes;