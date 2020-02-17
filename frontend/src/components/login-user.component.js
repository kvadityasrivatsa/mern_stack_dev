import React, {Component} from 'react';
import axios from 'axios';

export default class LoginUser extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            persona: '',
            password: ''
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePersona = this.onChangePersona.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChangeUsername(event) {
        this.setState({ username: event.target.value });
    }

    onChangePersona(event) {
        this.setState({ persona: event.target.value });
    }

    onChangePassword(event) {
        this.setState({ password: event.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            username: this.state.username,
            persona: this.state.persona,
            password: this.state.password
        }

        axios.post('http://localhost:4000/login', newUser)
             .then(res => {
                res.data.auth == "verified" ? console.log("hogawa") : console.log("katle");
                localStorage.setItem('username',newUser.username);
                localStorage.setItem('persona',newUser.persona);
                localStorage.setItem('login','success');
                // console.log(localStorage.getItem('username'));
                // console.log(localStorage.getItem('persona'));
             });

        this.setState({
            username: '',
            persona: '',
            password: ''
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.username}
                               onChange={this.onChangeUsername}
                               />
                    </div>
                    <div className="form-group">
                        <label>Persona: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.persona}
                               onChange={this.onChangePersona}
                               />  
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.password}
                               onChange={this.onChangePassword}
                               />  
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}