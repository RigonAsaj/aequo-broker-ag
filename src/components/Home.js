import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';

function Home() {
    return (
        <div className="home-page">
            <div className="row">
       <div className="col-1"></div>
       <div className="col-4">
         <img src="/images/logo_white.svg" alt="logo" className="logo"/>
       </div>
       <div className="col-6">
         <div className="nav-bar">
         <BrowserRouter>
      <Link className="link" to="/home">Home</Link>
      <Link className="link" to="/versicherungen">Versicherungen</Link>
      <Link className="link" to="partner">Partner</Link>
      <Link className="link" to="/services">Services</Link>
      <Link className="link" to="überuns">Über Uns</Link>
      <Link className="link" to="/kontakt">Kontakt</Link>
      </BrowserRouter>
         </div>
       </div>
       <div className="col-1"></div>
     </div>
     <div className="description">
      <p> 
      <span className="welcome-text">  Willkommen bei der </span><br/>
      <span className="name-text">AEQUO Broker AG</span>  <br/>
      Werden Sue unser Kunde und testen Sie uns
      </p>
      <button type="submit" className="btn-click">Jetz Probieren</button> 
     </div>
      

        </div>
    )
}

export default Home
