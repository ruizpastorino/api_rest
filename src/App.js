import "./styles/App.css";
import "./styles/bootstrap.min.css";
import "./styles/css/all.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/home.page";
import Location from "./components/location/location.page";
import Episode from "./components/episodes/episodes.page";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/location/:id" component={Location} />
          <Route exact path="/episode/:id" component={Episode} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
