import React from 'react'

import { connect } from 'react-redux'

import { Redirect } from 'react-router-dom'


class HomePage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            log: false
        }
    }

    render() {
        if (this.state.log === true) {
            return (<Redirect to="/"></Redirect>)
        }

        return (
            <div>
                <button onClick={() => {
                    this.props.dispatch({ type: "CONNECT_USER" })
                    this.setState({log: true})
                }}>Se connecter</button>
            </div>
        )
    }

}

let mapStateToProps = (state) => {
    return {
        user_is_logged: state.user_is_logged
    }
}

let dispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
}

export default connect(mapStateToProps, dispatchToProps)(HomePage)
