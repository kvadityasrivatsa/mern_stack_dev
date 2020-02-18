import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import UsersList from './components/users-list.component'
import CreateUser from './components/create-user.component'
import LoginUser from './components/login-user.component'
import ProductList from './components/login-user.component'
import VendorAddProduct from './components/vendor-add.component'
import VendorProductList from './components/vendor-list.component'
import MeBhe from './components/mebhe.component'

function App() { 
  if(localStorage.getItem('login')=="success" && localStorage.getItem('persona')=="vendor")
    return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">App</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">HAHA</Link>
              </li>
              <li className="navbar-item">
                <Link to="/vendor-add-product" className="nav-link">Add Product</Link>
              </li>
              <li className="navbar-item">
                <Link to="/vendor-product-list" className="nav-link">Product List</Link>
              </li>
            </ul>
          </div>
        </nav>

        <br/>
        <Route path="/vendor-add-product" component={VendorAddProduct}/>
        <Route path="/" exact component={UsersList}/>
        <Route path="/create" component={CreateUser}/>
        <Route path="/login" component={LoginUser}/>
        <Route path="/vendor-product-list" component={VendorProductList}/>
        <Route path="/vendor/lists" component={MeBhe}/>
      </div>
    </Router>
  ); 

  else if(localStorage.getItem('login')=="success" && localStorage.getItem('persona')=="customer")
    return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">App</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Users</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">SignUp</Link>
              </li>
              <li className="navbar-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
            </ul>
          </div>
        </nav>

        <br/>
        <Route path="/" exact component={UsersList}/>
        <Route path="/create" component={CreateUser}/>
        <Route path="/login" component={LoginUser}/>
      </div>
    </Router>
  ); 

  else
    return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">App</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Users</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">SignUp</Link>
              </li>
              <li className="navbar-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
            </ul>
          </div>
        </nav>

        <br/>
        <Route path="/" exact component={UsersList}/>
        <Route path="/create" component={CreateUser}/>
        <Route path="/login" component={LoginUser}/>
      </div>
    </Router>
  ); 
}

export default App;
