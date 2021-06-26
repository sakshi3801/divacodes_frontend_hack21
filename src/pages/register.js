import React from 'react';
import Footer from '../Components/Footer';
import NavbarComp from '../Components/NavbarComp'; 
function register() {
    return (
        <div style={{ height: "30em", backgroundImage:  "linear-gradient(white, hsl(59, 79%, 62%), white);"}}>
            <NavbarComp />
                <div  className="row col-12 d-flex justify-content-center text-center  ">
                    <h3 id='reg1'>Register</h3>
                    <br />
                    <div className="card col-12 col-lg-4 login-card mt-2 hv-center" id='reg'>
                        <form>
                            <div className="form-group text-left p-3">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email"
                                    className="form-control"
                                    id="email"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                />

                            </div>
                            <div className="form-group text-left p-3">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="form-group text-left p-3">
                                <label htmlFor="exampleInputPassword1">Confirm Password</label>
                                <input type="password"
                                    className="form-control"
                                    id="confirmPassword"
                                    placeholder="Confirm Password"/>

                            </div>
                            <div className="text-center p-3">
                                <button
                                    type="submit"
                                    className="btn btn-primary align-center"
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <Footer />
        </div>
        
    )
}
export default register;