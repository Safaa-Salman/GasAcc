/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';


const required = (val) => val && val.length;
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));


class Invoice extends Component  {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);  
    }


    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.props.postInvoice(values.company, values.tank, values.value, values.litre, values.serialnbr);
        this.props.resetInvoiceForm();
        // event.preventDefault();
    }

    render() {

        return(
            <div className="container">
                
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem active>Invoice</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Invoice</h3>
                        <hr />
                    </div>                
                </div>

                <div className="row row-content">

                    <div className="col-12 col-md-9 h5">
                    <Form model="invoice" onSubmit={(values) => this.handleSubmit(values)}>

                            <Row className="form-group">
                                <Label htmlFor="company" className="form-header mb-2" xs={12}>Company</Label>   
                                <Col>
                                    <Control.select model=".company" name="company"
                                         className="form-control">
                                         <option>ITP</option>
                                         <option>ToTal</option>
                                         <option>Medco</option>
                                    </Control.select>
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="tank" className="form-header mb-2" xs={12}>Tank</Label>   
                                <Col>
                                    <Control.select model=".tank" name="tank"
                                         className="form-control">
                                         <option>Diesel</option>
                                         <option>A(95)</option>
                                         <option>B(95)</option>
                                    </Control.select>
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="litre"className="form-header" md={3}>Litre</Label>
                                <Col md={9}>
                                    <Control.text model=".litre" id=".litre" name=".litre"
                                        placeholder="qty(USD or LL)"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(1), isNumber
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".litre"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 3 numbers',
                                            isNumber: 'Must be a number'
                                        }}
                                     />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="value" className="form-header" md={3}>Value</Label>
                                <Col md={9}>
                                    <Control.text model=".value" id=".value" name=".value"
                                        placeholder="value"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), isNumber
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".value"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 3 numbers',
                                            isNumber: 'Must be a number'
                                        }}
                                     />
                                </Col>
                            </Row>
                                
                            <Row className="form-group">
                                <Label htmlFor="serialnbr" className="form-header" md={3}>Serial number</Label>
                                <Col md={9}>
                                    <Control.text model=".serialnbr" id=".serialnbr" name=".serialnbr"
                                        placeholder="Serial number"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), isNumber
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".serialnbr"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 3 numbers',
                                            isNumber: 'Must be a number'
                                        }}
                                     />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={{size:6, offset: 3}}>
                                    <Button type="submit" color="primary" block>
                                    ADD
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
               </div>
            </div>
        );
    }
}

export default Invoice;