import React from 'react';
import {Button, Checkbox , Form } from 'semantic-ui-react';
class FormSignUp extends React.Component {
    render() {
        return (
            <div className="container signup">
                <div className="row">
                    <div className="col-md-12 signup-page">
                        <Form inverted>
                            <Form.Group widths='equal'>
                                <h1 className="heading">SignUp Page</h1>
                            <Form.Field>
                                <label className="firstname">First Name</label><br/>
                                <input className="first-name" placeholder='First Name'/>
                            </Form.Field>
                            <Form.Field>
                                <label className="lastname">Last Name</label><br/>
                                <input className="last-name" placeholder='Last Name'/>
                            </Form.Field>
                            <Form.Field>
                                <label className="emailid">Email ID</label><br/>
                                <input className="email-id" placeholder='Email ID'/>
                            </Form.Field>
                            <Form.Field>
                                <label className="password">Password</label><br/>
                                <input className="pass-word" placeholder='Password' type='password'/>
                            </Form.Field>
                            <Form.Field>
                                <Checkbox className="check-agree" label='I agree to the terms and conditions'/>
                            </Form.Field>
                                    <Button type='submit'>Submit</Button>
                                    <Button type='Login'>Login</Button>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>
        
        );
    }
}

export default FormSignUp;