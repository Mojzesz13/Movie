import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Sidebar from "./sidebar";
import Posts from "./posts";
import Users from "./users";

class Dashboard extends Component {
    render() {
        return (
            <div>
              <h1>dashboard</h1>
                <Sidebar/>
                <Route path="/admin/posts" component={Posts}/>
                <Route path="/admin/users" component={Users}/>
            </div>
        );
    }
}

export default Dashboard;