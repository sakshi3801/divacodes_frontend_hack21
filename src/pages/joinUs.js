import React from 'react';
import joinus from '../images/home/joinus.png'
import NavbarComp from '../Components/NavbarComp'
import Footer from '../Components/Footer'
function joinUs(){
    return(
        <>
        <div>
                <NavbarComp />
                <div style={{  backgroundImage:  "linear-gradient(#ffff5c,#ffffff,#ffff5c)" }} className="p-3 m-4">
                    <h1 className="text-center p-3">Join Us</h1>
                    <p style={{ fontSize: "1.4em" }}> If you are a creator of the beautiful indian handicrafts, please connect with us and sell your products directly to your
                        customers globally.
                    </p>
                    <p style={{ fontSize: "1.2em" }}>Help us keep your and our legacy alive and thriving.</p>
                    <h3 className="text-center p-3">How to connect?</h3>
                    <p style={{ fontSize: "1.2em" }}>
                        <ul>
                            <li>mail us using the email-ids given below or call us on the given numbers.</li>
                            <li>our team will personally guide you through the process of-
                                <ul>
                                    <li>
                                        showcasing your craft
                                    </li>
                                    <li>
                                        connecting with the customers directly
                                    </li>
                                    <li>
                                        managing the monetry transactions.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </p>
                    <div className="text-center">
                        <h4><a style={{ marginRight: '.6rem' }} href="mailto:aditi.dwd16@gmail.com">  Aditi Dwivedi</a>
                            Phone Number: <span style={{ color: "#0000ff" }}>7007273339</span></h4>
                        <h4><a style={{ marginRight: '.6rem' }} href="mailto:saakshi030801@gmail.com"> Sakshi Ramsinghani</a>
                            Phone Number: <span style={{ color: "#0000ff" }}>7987617236</span></h4>
                    </div>

                </div>
                <Footer />
        </div>
            
            </>
    )
}
export default joinUs