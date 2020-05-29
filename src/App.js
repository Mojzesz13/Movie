import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import Movie from "./components/Movie";
import NavBar from "./components/NavBar";
import Products from "./components/products";
import Post from "./components/post";
import Dashboard from "./components/dashboard";
import Home from "./components/Home";
import ProductDetails from "./components/Products/productDetails";
import ProductDetails2 from "./components/Products/productDetails2";
import ProductDetails3 from "./components/Products/productDetails3";
import './App.css';


class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div className="content">
                    <Switch>
                        <Route path="/products/:id" component={ProductDetails}/>
                        <Route path="/products" render={(props) => <Products sortBy="newest" {...props}/>}/>
                        <Route path="/movie" component={Movie}/>
                        <Route path="/post/:year/:month" component={Post}/>
                        <Route path="/admin" component={Dashboard}/>
                        <Route path="/" component={Home}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
