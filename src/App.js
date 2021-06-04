import "./styles/App.css";
import './styles/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/home";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
