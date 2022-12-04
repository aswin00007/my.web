import React from "react";
import './Login1.css';
import log from './log.jpg';

function Login() {
    return (
        <header className="login py-5 bg-light">
            <div className="container">
             <div className="row">
              <div className="col-lg-5 g-0">
                <img src={log} className='img-fluid'/>
              </div> 
              <div className="col-lg-7 text-center py-5">
                <h1 className="mb-5">Welcome</h1>
                <form>      
                    <div>          
                   <input type="text" placeholder="UserName" className="rounded-pill mb-4"/>
                   </div> 
                   <div>
                   <input type="password" placeholder="Password" className="rounded-pill mb-5" />
                    </div> 
                    <button className="btn btn-primary px-5 mb-3">Sign Up</button> 
                    <div className="mb-3">
                        <label>Or Login With</label>
                    </div>            
                    <div>
                        <a href="#"><i className="fa-brands fa-facebook p-2"></i></a>
                        <a href="#"><i className="fa-brands fa-google-plus-g"></i></a>
                    </div>      
                </form>
                </div>             
             </div>
            </div>
        </header>
    )
}

export default Login;