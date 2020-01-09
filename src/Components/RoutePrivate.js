
import React from "react" 

import { connect } from 'react-redux'

import { Redirect } from 'react-router-dom'

class RoutePrivate extends React.Component {

    render() {

        if (this.props.user_is_logged === true) {
            return (
                this.props.children
            )
        } else {
            return (<Redirect to="/"></Redirect>)
        }
        
    }

}

let mapStateToProps = (state) => {
    return {
        user_is_logged: state.user_is_logged
    }
}

export default connect(mapStateToProps)(RoutePrivate)