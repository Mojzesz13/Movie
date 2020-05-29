import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
                <ul className="flex-row">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/movie">Movie</Link></li>
                    <li><Link to="/post">Post</Link></li>
                    <li><Link to="/admin">Dashboard</Link></li>
                </ul>
        );
    }
}

export default NavBar;