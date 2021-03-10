import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import TeamDetail from './components/TeamDetail/TeamDetail';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <Router>
        <Switch>
          <Route path="/team/:teamId">
            <TeamDetail/>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
