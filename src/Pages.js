import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'

function Pages(){
    return (
        <div>
            <BrowserRouter>
            <Switch>
                <Route exact path="/home">Home</Route>
                <Route path="/versicherungen">Versicherungen</Route>
                <Route path="/partner">Partner</Route>
                <Route path="/services">Services</Route>
                <Route path="/überuns">Über Uns</Route>
                <Route path="/kontakt">Kontakt</Route>
            </Switch>
            </BrowserRouter>

        </div>
    );
}

export default Pages