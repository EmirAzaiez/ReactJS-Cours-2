import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { connect } from 'react-redux'

import Header from './Components/Header'

import HomePage from './Components/HomePage'
import LoginPage from './Components/LoginPage'
import ListPage from './Components/ListPage'
import ContactPage from './Components/ContactPage'

import './App.css';

class App extends React.Component {

  render() {

    return (
        <Router>
            <div className="App">
                
                <Header/>

                <Switch>

                    <Route path="/contact">
                            <ContactPage />
                    </Route>

                    <Route path="/list">
                            <ListPage />
                    </Route>

                    <Route exact path="/login" >
                        <LoginPage />
                    </Route>

                    <Route exact path="/" >
                        <HomePage />
                    </Route>

                </Switch>

            </div>
        </Router>
    )

  }

}

export default App;