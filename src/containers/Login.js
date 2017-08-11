import React, { Component } from 'react';
import { LoginForm } from '../components';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        };

        this.handleAuth = this.handleAuth.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleAuth(event) {
        event.preventDefault();
        let spec = {

        };

        fetch("", spec)
            .then(r => r.json())
            .then(json => console.log(json));
    }

    render() {
        return (
           <LoginForm
               onPasswordChange={this.handlePasswordChange}
               onEmailChange={this.handleEmailChange}
               onClick={this.handleAuth}/>
        );
    }
}
