import React, { Component } from 'react';
import logo from '../logo.svg';

class Navbar extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="http://localhost:3000/">
                <img src={ logo } width="90px" alt="logo"/>  React Counter App</a>
             </nav>
            </React.Fragment>
         );
    }
}
 
export default Navbar;