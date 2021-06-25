import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp.jsx'
import Carousal from './Components/Carousal';
import ShopByCategory from './Components/ShopByCategory.jsx';
import BestSellers from './Components/BestSellers';
import NewArrivals from './Components/NewArrivals';
<<<<<<< HEAD

import Clay from './pages/Clay'
import Metal from './pages/Metal'
import Lamps from './pages/Lamps'
import Wall from './pages/Wall'
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
=======
import Footer from './Components/Footer';
>>>>>>> 2a1bda33ec394b42af93f3b731b933ebb174b8c7
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
<<<<<<< HEAD
    
=======
    <Footer />
>>>>>>> 2a1bda33ec394b42af93f3b731b933ebb174b8c7
    </div>
  );
}

export default App;
