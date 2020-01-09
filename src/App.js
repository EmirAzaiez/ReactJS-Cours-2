import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


import Header from './Components/Header'

import HomePage from './Components/HomePage'
import LoginPage from './Components/LoginPage'
import ListPage from './Components/ListPage'
import ContactPage from './Components/ContactPage'

import RoutePrivate from './Components/RoutePrivate'

import './App.css';

class App extends React.Component {

  render() {

    return (
        <Router>

            <div className="App">

                <Header></Header>

                <Switch>

                    {/* <RoutePrivate> */}
                    {/* </RoutePrivate> */}

                    <Route exact path="/">

                        <HomePage></HomePage>
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

            </div>

        </Router>
    )

  }

}

export default App;