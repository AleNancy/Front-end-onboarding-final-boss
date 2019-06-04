import React from 'react';
import {AutoForm, AutoField, ErrorField} from 'uniforms-unstyled';
import SimpleSchema from 'simpl-schema';
import './Login.css';

class Login extends React.Component {
    constructor() {
        super();
    }

    onSubmit = (data) => {
        const {email, password} = data;

        Meteor.loginWithPassword(email, password, (err) => {
            if (!err) {
                FlowRouter.go('donuts');
            } else {
                alert(err.reason);
            }
        });
    };

    render() {
        return (
            <main className="cc-main">

                <div className="donut-Login">

                    <h1>donut</h1>
                    <p>Login</p>

                </div>

                <AutoForm schema={LoginSchema} onSubmit={this.onSubmit}>
                    <AutoField name="email" type="text" placeholder="Email"/>
                    <ErrorField name="email"/>

                    <AutoField name="password" type="password" placeholder="Password"/>
                    <ErrorField name="password"/>

                    <table className="Sign-in">

                        <tr className="forgot">
                            <th><p>Forgot your password!</p></th>
                            <th className="button-Sign-in"><button type="submit">Sign in</button></th>
                        </tr>
                        
                    </table>

                </AutoForm>
            </main>
        )
    }
}

const LoginSchema = new SimpleSchema({
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    password: {type: String}
});

export default Login;