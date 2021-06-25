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
<<<<<<< HEAD

=======
import {Route} from 'react-router-dom'
import Clay from './Pages/clay.jsx'
>>>>>>> c807aa076eee6a89bac328f4d4877a01a6837c9e

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      
     
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
     

    
    
    
    

    

    

=======
    <Route path='/' exact component={NavbarComp} />
    <Route path='/' exact component={Carousal} />
    <Route path='/' exact component={ShopByCategory} />
    <Route path='/' exact component={BestSellers} />
    <Route path='/' exact component={NewArrivals} />
    <Route path='/' exact component={Footer} />
    <Route path='/clay' exact component={Clay} />
>>>>>>> c807aa076eee6a89bac328f4d4877a01a6837c9e
    </div>
  );
}

export default App;
