import React from 'react'
import NavbarComp from '../Components/NavbarComp'
import Footer from '../Components/Footer'

function customerService()
{
    return(
         <>
            <div>
                <NavbarComp />
   <div >
            <h1 className="text-center text-2xl p-3">
           Customer Support
       </h1>
       <h2>Connect with us:</h2>
            <h4><a style={{ marginRight: '.5rem' }} href="mailto:aditi.dwd16@gmail.com">  Aditi Dwivedi</a>
             Phone Number: <span style={{color:"#0000ff"}}>7007273339</span></h4>
            <h4><a style={{ marginRight: '.5rem' }} href="mailto:saakshi030801@gmail.com"> Sakshi Ramsinghani</a>
             Phone Number: <span style={{ color: "#0000ff" }}>7987617236</span></h4>
   </div>
                <Footer />
            </div>
            </>

    )
}
export default customerService