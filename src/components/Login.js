
/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import {Button, Row, Col } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

const required = (val) => val && val.length;
const minLength = (len) => (val) => val && (val.length >= len);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Login extends Component  {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);  
    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.props.postLogin( values.email, values.password);
        this.props.resetLoginForm();
    }

    render() {

        return(
            <div className="container">
                <div className="row row-content">
                   <div className="col-12 offset-1 ">
                      <img src="images/Login_logo.png" width="85%" height="100%" alt="logo"/>
                   </div>
                    <div className="col-12 col-md-9">
                        <Form model="login" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Col md={{size:6, offset: 5}}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required, validEmail
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required, ',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:6, offset: 5}}>
                                    <Control.text type="password" model=".password" id="password" name="password"
                                        placeholder="Password"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(8)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".password"
                                        show="touched"
                                        messages={{
                                            required: 'Required, ',
                                            minLength: 'Must be greater than 8 characters',
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 6, offset: 5}}>
                                    <Link to={`/home`} >
                                        <Button type="submit" color="primary" block>
                                            LOGIN
                                        </Button>
                                    </Link>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 4, offset: 7}}>
                                    <p>Forgot Password?</p>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Login;