import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp.jsx'
import Carousal from './Components/Carousal';
import ShopByCategory from './Components/ShopByCategory.jsx';
import BestSellers from './Components/BestSellers';
import NewArrivals from './Components/NewArrivals';
import Footer from './Components/Footer';
import {Route} from 'react-router-dom'
import Clay from './Pages/clay.jsx'

function App() {
  return (
    <div className="App">
    <Route path='/' exact component={NavbarComp} />
    <Route path='/' exact component={Carousal} />
    <Route path='/' exact component={ShopByCategory} />
    <Route path='/' exact component={BestSellers} />
    <Route path='/' exact component={NewArrivals} />
    <Route path='/' exact component={Footer} />
    <Route path='/clay' exact component={Clay} />
    </div>
  );
}

export default App;
