import React, { Component } from 'react';
import { FormGroup,
         FormControl,
         Checkbox,
         Button } from 'react-bootstrap';
import './LoginForm.css';

export class LoginForm extends Component {
    render() {
        return (
          <div className="container">
            <div className="form-signin">
                <h2 className="form-signin-heading">Please sign in</h2>
                <FormGroup controlId="email">
                    <FormControl
                        type="email"
                        onChange={this.props.onEmailChange}
                        placeholder="Email address"/>
                </FormGroup>
                <FormGroup controlId="password">
                    <FormControl
                        type="password"
                        onChange={this.props.onPasswordChange}
                        placeholder="Password"/>
                </FormGroup>
                <FormGroup>
                  <Checkbox id="inputRememberMe">Remember me</Checkbox>
                </FormGroup>
                <Button
                   className="btn btn-lg btn-primary btn-block"
                   type="submit"
                   onClick={this.props.onClick}>Sign in</Button>
            </div>
          </div>
        );
    }
}
