import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousal from '../Components/Carousal.jsx'
import ShopByCategory from '../Components/ShopByCategory.jsx';
import BestSellers from '../Components/BestSellers.jsx';
import NewArrivals from '../Components/NewArrivals';
import Footer from '../Components/Footer.jsx';
import NavbarComp from '../Components/NavbarComp'
import { Route } from 'react-router-dom'
import clay from './clay'
import lamps from './lamps'
import metal from './metal'
import wall from './wall'
import customerService from './customerService'
import register from './register.js';
import login from './login.js';
import joinUs from './joinUs';

function Home(){
    return(
            <>
            <Route path='/' exact component={NavbarComp} />
            <Route path='/' exact component={Carousal} />
            <Route path='/' exact component={ShopByCategory} />
            <Route path='/' exact component={BestSellers} />
            <Route path='/' exact component={NewArrivals} />
            <Route path='/' exact component={Footer} />
            <Route path='/Clay' exact component={clay} />
            <Route path='/Lamps' exact component={lamps} />
            <Route path='/Metal' exact component={metal} />
            <Route path='/Wall' exact component={wall} />
            <Route path='/Customer' exact component={customerService} />
            <Route path='/register' exact component={register} />
            <Route path='/login' exact component={login} />
            <Route path='/joinus' exact component={joinUs} />
            </>
    );
}
export default Home