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
    
            <p id='about'>We intend to bring the small websites selling handicrafts and our artisans on a single platform to sell their goods directly to their customers.</p>
            
            <br />
            <div id='socialMedia'>
                </div>
                
 </div>
 <div id='contact'>
           

                <LocationOnIcon id='icons' />
 Duplex No. 123, Sakar Hill View Colony, Shakti Nagar, <br />   Jabalpur, Madhya Pradesh - 482001<br /><br />
 <MailOutlineIcon id='icons'/>
<a href="mailto:craftmoonhandicrafts@gmail.com" target="_blank" rel="noopener noreferrer" id='mail'>  craftmoonhandicrafts@gmail.com</a>
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