import React from 'react';

function register() {
    return (
        <div style={{ width: "100em", height: "100em", backgroundImage:  "linear-gradient(yellow,white)"}}>
            <nav class="navbar ">
                <div className="row col-12 d-flex justify-content-center text-center  ">
                    <span className="h3">Register</span>

                    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
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
                                    placeholder="Confirm Password"
                                />
                            </div >
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
            </nav>
        </div>
        
    )
}
export default register;