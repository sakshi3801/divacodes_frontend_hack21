import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp.jsx'
import Carousal from './Components/Carousal';
import ShopByCategory from './Components/ShopByCategory.jsx';
import BestSellers from './Components/BestSellers';
function App() {
  return (
    <div className="App">
    <NavbarComp />
    <Carousal />
    <ShopByCategory />
    <BestSellers />
    </div>
  );
}

export default App;
