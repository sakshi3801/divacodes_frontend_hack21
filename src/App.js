import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp.jsx'

import Home from './pages/Home'

import Clay from './pages/Clay'
import Metal from './pages/Metal'
import Lamps from './pages/Lamps'
import Wall from './pages/Wall'
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      
     
      <Router>
        <NavbarComp />
       
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        
        <Switch>
          <Route path="/wall">
            <Wall />
          </Route>
        </Switch>
        <Switch>
          <Route path="/lamps">
            <Lamps />
          </Route>
        </Switch>
        <Switch>
          <Route path="/metal">
            <Metal />
          </Route>
        </Switch>
        <Switch>
          <Route path="/clay">
            <Clay />
          </Route>
        </Switch>
        
       
        <Footer />
        
      
      </Router>
     

    
    
    
    

    

    

    </div>
  );
}

export default App;
