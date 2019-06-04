import React from 'react';
import {AutoForm, AutoField, ErrorField} from 'uniforms-unstyled';
import SimpleSchema from 'simpl-schema';
import './Register.css';

class Register extends React.Component {
    constructor() {
        super();

    }

    onSubmit = (data) => {
        const {email, password} = data;

        Accounts.createUser({
            email,
            password,
        }, (err) => {
            if (!err) {
                FlowRouter.go('donuts.list');
            }
            else {
                alert(err.reason);
            }
        })
    };

    render() {
        return (
            <main className="main-Register">

                <div className="donut-Register">

                    <h1>donut</h1>
                    <p>Register</p>

                </div>

                <AutoForm schema={RegisterSchema} onSubmit={this.onSubmit}>

                    <input name="name" type="text" placeholder="Name"></input>

                    <AutoField name="email" type="text" placeholder="Email"/>
                    <ErrorField name="email"/>

                    <AutoField name="password" type="password" placeholder="Password"/>
                    <ErrorField name="password"/>

                    <AutoField name="confirm_password" type="password" placeholder="Re-enter Password"/>
                    <ErrorField name="confirm_password"/>

                    <button type="submit">
                        Sign up
                    </button>
                </AutoForm>
            </main>
        )
    }
}

const RegisterSchema = new SimpleSchema({
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    password: {type: String},
    confirm_password: {
        type: String,
        custom() {
            if (this.value !== this.field('password').value) {
                return 'passwordMismatch';
            }
        }
    }
});

export default Register;