import React, {Component} from 'react';
import axios from 'axios';

export default class LogoutUser extends Component {
    
    constructor(props) {
        super(props);
        this.state = {users: []}
    }

    componentDidMount() {
		this.props.updater();
		window.access("http://localhost:4000/")
    }

}