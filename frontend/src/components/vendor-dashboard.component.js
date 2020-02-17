import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import AddProduct from './components/vendor-add.component'
// import CreateUser from './components/create-user.component'
// import LoginUser from './components/login-user.component'
import axios from 'axios';

export default class ProductList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {users: []}
    }

    componentDidMount() {
        axios.get('http://localhost:4000/vendor-dashboard')
             .then(response => {
                 this.setState({users: response.data});
             })
             .catch(function(error) {
                 console.log(error);
             })
    }
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">App</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              // <li className="navbar-item">
              //   <Link to="/" className="nav-link">Users</Link>
              // </li>
              // <li className="navbar-item">
              //   <Link to="/create" className="nav-link">SignUp</Link>
              // </li>
              <li className="navbar-item">
                <Link to="/login" className="nav-link">Add Product</Link>
              </li>
            </ul>
          </div>
        </nav>

        <br/>
        <Route path="/"+localStorage.getItem('username')+"/vendor-add" exact component={AddProduct}/>
        // <Route path="/create" component={CreateUser}/>
        // <Route path="/login" component={LoginUser}/>
      </div>
    </Router>
  );
}

export default App;
