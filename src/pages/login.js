import React from 'react';
import Footer from '../Components/Footer';
import NavbarComp from '../Components/NavbarComp';

function login() {
    return (
        <div style={{ height: "30em", backgroundImage: "linear-gradient(white, hsl(59, 79%, 62%), white);" }}>
                <NavbarComp />
                <div className="row col-12 d-flex justify-content-center text-center  ">
                    <h3 id='reg1'>Login</h3>

                    <div  className="card col-12 col-lg-4 login-card mt-2 hv-center" id='reg2'>
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
                           
                            <div className="text-center p-3">
                                <button
                                    type="submit"
                                    className="btn btn-primary align-center"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
        </div>

    )
}
export default login;