import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import './Footer.css'
const Footer = ()=>{

    return(

        <div id='footer'>

            <div id='footerDown'>
 <div id='address'>
         <h3 id='head'>About Us</h3>
            <p id='about'>Craft Moon brings all the websites big or small, selling handicrafts, under one roof. </p>
            <br />
            <div id='socialMedia'>
            {/* <TwitterIcon id='icons' className='media'/>
                <FacebookIcon id='icons' className='media'/>
                <InstagramIcon id='icons' className='media'/> */}
                </div>
                
 </div>
 <div id='contact'>
           

                <LocationOnIcon id='icons' />
 Duplex No. 123, Sakar Hills View, Shakti Nagar, <br />   Jabalpur, Madhya Pradesh -482001<br /><br />
 <MailOutlineIcon id='icons'/>
<a href="mailto:saakshi030801@gmail.com" target="_blank" rel="noopener noreferrer" id='mail'>  craftmoon@gmail.com</a>
<br /><br />
<CallIcon id='icons'/> +91-7987617236
<br /><br />
<TwitterIcon id='icons' className='media'/>
                <FacebookIcon id='icons' className='media'/>
                <InstagramIcon id='icons' className='media'/>
 </div>

</div>
        </div>
    )
}

export default Footer