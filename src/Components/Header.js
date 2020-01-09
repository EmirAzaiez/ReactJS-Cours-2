import React from 'react'

import {
    NavLink
} from "react-router-dom";

import { connect } from 'react-redux'

class Header extends React.Component {

    render() {

        return (
            <header className="App-header">

                <NavLink to="/" activeClassName="active">Accueil</NavLink>

                { this.props.user_is_logged === false && <NavLink to="/login" activeClassName="active">Login</NavLink> }

                { this.props.user_is_logged && <NavLink to="/list" activeClassName="active">Listing</NavLink> }
                
                { this.props.user_is_logged && <NavLink to="/contact" activeClassName="active">Contact</NavLink> }


                

            </header>
        )
    }

}

let mapStateToProps = (state) => {
    return {
        user_is_logged: state.user_is_logged
    }
}

export default connect(mapStateToProps)(Header)