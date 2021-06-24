import React from 'react';
import { Button , Form } from 'semantic-ui-react';
import FormSignUp from './Signup';
class LoginUp extends React.Component {
    render() {
        return (
            <div className="container login">
                <div className="row">
                    <div className="col-md-12 login-page">
                        <Form inverted>
                            <Form.Group widths='equal'>
                                <h1 className="heading">Login Page</h1>
                                <Form.Field>
                                    <label className="emailid">Email ID</label><br/>
                                        <input className="email-id" placeholder='Email ID'/>
                                </Form.Field>
                                <Form.Field>
                                    <label className="password">Password</label><br/>
                                        <input className="pass-word" placeholder='Password' type='password'/>
                                </Form.Field>
                                        <Button type='submit'>Submit</Button>
                                        <Button type="./Signup.js">SignUp</Button>
                                </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>
        
        );
    }
}

export default LoginUp;