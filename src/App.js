import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import NavBar from "./components/navBar";
import LoginForm from "./components/loginform";
import Movie from "./components/movie";
import MovieForm from "./components/MovieForm";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import './App.css';


class App extends Component {
    render() {
        return (
            <>
                <NavBar/>
                <main className="container">
                    <Switch>
                        <Route path="/login" component={LoginForm}/>
                        <Route path="/movies/:id" component={MovieForm}/>
                        <Route path="/movies" component={Movie}/>
                        <Route path="/customers" component={Customers}/>
                        <Route path="/rentals" component={Rentals}/>
                        <Route path="/not-found" component={NotFound}/>
                        <Redirect from="/" exact to="/movies"/>
                        <Redirect to="/not-found"/>
                    </Switch>
                </main>
            </>
        );
    }
}

export default App;