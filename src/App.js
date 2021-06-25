import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp.jsx'
import Carousal from './Components/Carousal';
function App() {
  return (
    <div className="App">
    <NavbarComp />
    <Carousal />
    </div>
  );
}

export default App;
