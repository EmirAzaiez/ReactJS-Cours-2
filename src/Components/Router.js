import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Header from './Screens/Partials/Header'
import Footer from './Screens/Partials/Footer'

import HomePage from './Screens/HomePage'
import LoginPage from './Screens/LoginPage'
import ListPage from './Screens/MoviesPage'
import ContactPage from './Screens/ContactPage'

import RoutePrivate from './Utils/Router/RoutePrivate'

export default function () {
    return (
        <Router>

            <div className="App">

                <Header></Header>

                <Switch>

                    <Route exact path="/">

                        <HomePage></HomePage>
                    </Route>

                    <Route exact path="/login">

                        <LoginPage></LoginPage>
                    </Route>

                    <Route path="/contact">

                        <RoutePrivate >
                            <ContactPage></ContactPage>
                        </RoutePrivate>

                    </Route>

                    <Router path="/list">

                        <RoutePrivate >
                            <ListPage></ListPage>
                        </RoutePrivate>

                    </Router>

                </Switch>

                <Footer></Footer>

            </div>

        </Router>
    )
}