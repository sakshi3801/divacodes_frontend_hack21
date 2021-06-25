import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


import Carousal from '../Components/Carousal.jsx'
import ShopByCategory from '../Components/ShopByCategory.jsx';
import BestSellers from '../Components/BestSellers.jsx';
import NewArrivals from '../Components/NewArrivals';
function Home(){
    return(
        <div>
            <div><Router><Link
                to="/"
                className="text-white py-3 border-t, border-b block"
                   
            >
                
            </Link></Router>
               
            </div>
            
            
            <Carousal />
            <ShopByCategory />
            <BestSellers />
            <NewArrivals />
        </div>
    )
}
export default Home