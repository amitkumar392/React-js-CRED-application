import React, { Component } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import NotFound from './components/pages/NotFound';


import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import AddUser from './components/Users/AddUser';
import EditUser from './components/Users/EditUser';
import ViewUser from './components/Users/ViewUser';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/About" component={About} />
                        <Route exact path="/Contact" component={Contact} />
                        <Route exact path="/Users/AddUser" component={AddUser} />
                        <Route exact path="/Users/EditUser/:id" component={EditUser} />
                        <Route exact path="/Users/ViewUser/:id" component={ViewUser} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
