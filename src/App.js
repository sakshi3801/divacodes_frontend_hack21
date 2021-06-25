import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp.jsx'
import Carousal from './Components/Carousal';
import ShopByCategory from './Components/ShopByCategory.jsx';
import BestSellers from './Components/BestSellers';
import NewArrivals from './Components/NewArrivals';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
    <NavbarComp />
    <Carousal />
    <ShopByCategory />
    <BestSellers />
    <NewArrivals />
    <Footer />
    </div>
  );
}

export default App;
