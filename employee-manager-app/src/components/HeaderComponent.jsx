import React, { Component } from 'react';
import logo from './../igd_logo.png';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
           <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div>
                            < a href="https://igreendata.com.au/" className="header"> IGD Employee Management App</a>
                            <br/>
                            <img src={logo} alt="Logo" />
                        </div>
                    </nav>
                </header>
                
            </div>
        );
    }
}

export default HeaderComponent;