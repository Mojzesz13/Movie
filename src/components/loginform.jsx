import React from 'react';
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
    state = {
        data: {username: "", password: ""},
        errors: {}
    };

    schema = {
        username: Joi.string()
            .required()
            .alphanum()
            .min(3)
            .max(30)
            .label("Username"),
        password: Joi.string()
            .required()
            .label("Password")
            .min(3)
            .max(30)
    };

    doSubmit = () => {
        console.log("Submitted")
    }

    render() {

        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderButton("Login")}
                </form>
            </div>
        );
    }
}

export default LoginForm;


//  very basic validate
// validate = () => {
//     const errors = {};
//
//     const {data} = this.state;
//     if (data.username.trim() === "")
//         errors.username = "Username is required.";
//     if (data.password.trim() === "")
//         errors.password = "Password is required.";
//
//     return Object.keys(errors).length === 0 ? null : errors;
// };

