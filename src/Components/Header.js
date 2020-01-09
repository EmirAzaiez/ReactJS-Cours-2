import React from 'react'

import {
    NavLink
} from "react-router-dom";

class Header extends React.Component {

    render() {


        return (
            <header className="App-header">

                <NavLink to="/" activeClassName="active">Accueil</NavLink>

                <NavLink to="/list" activeClassName="active">Listing</NavLink>

                <NavLink to="/contact" activeClassName="active">Contact</NavLink>

            </header>
        )
    }

}

export default Header;