import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Navigation from './Pages/Shared/NavBar/Navigation';
import Footer from './Pages/Shared/Footer/Footer';
import MoreProduct from './Pages/Home/MoreProducts/MoreProduct';
function App() {
  return (

    <Router>
      <Navigation/>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/exploreMore">
          <MoreProduct/>
        </Route>
      </Switch>
      <Footer/>
    </Router>

  );
}

export default App;
