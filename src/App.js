import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp.jsx'
import Carousal from './Components/Carousal';
import ShopByCategory from './Components/ShopByCategory.jsx';
import BestSellers from './Components/BestSellers';
import NewArrivals from './Components/NewArrivals';

import Clay from './pages/Clay'
import Metal from './pages/Metal'
import Lamps from './pages/Lamps'
import Wall from './pages/Wall'
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <NavbarComp />
      <ShopByCategory />
      <Router>
       
        
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
        
       

        
      
      </Router>
      

    
    <Carousal />
    
    <BestSellers />
    <NewArrivals />
    
    </div>
  );
}

export default App;
