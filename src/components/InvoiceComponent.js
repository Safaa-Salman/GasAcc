/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Label, Button, Modal, ModalHeader, ModalBody, Row, Col, Table } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';


function RenderInvoice({invoice, postInvoice}) {
    if (invoice != null){
                return (
                    <div>
                        <Table className="table-striped table-dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Date</th>
                                    <th>Company</th>
                                    <th>Liter</th>
                                    <th>Tank</th>
                                    <th>Value</th>
                                    <th>Serial Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {invoice.map((invoice) => {
                                    return(
                                        <tr key={invoice.id}>
                                        <th scope="row">{invoice.id}</th>
                                        <td>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(invoice.date)))}</td>
                                        <td>{invoice.company}</td>
                                        <td>{invoice.litre}</td>
                                        <td>{invoice.tank}</td>
                                        <td>{invoice.value}</td>
                                        <td>{invoice.serialnbr}</td>
                                    </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </div>
                );
        }

    else{
        return(
            <div></div>
        );
    }
}

const required = (val) => val && val.length;
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));

class InvoiceForm extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);  
      }

      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

      async handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.props.postInvoice(values.company, values.tank, values.value, values.litre, values.serialnbr);
        // this.props.resetInvoiceForm();
        // event.preventDefault();
    }
    // handleSudmit().then(window.location.reload());

    render() {
        return(
            <div className="container">     
                <div className="ml-auto">
                    <Button onClick={this.toggleModal} color="primary" block> Add Invoice</Button>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Invoice</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>

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
                                        placeholder="Quantity(litre)"
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
                                            required: 'Required, ',
                                            minLength: 'Must be greater than 3 numbers ',
                                            isNumber: 'Must be a number'
                                        }}
                                     />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="value" className="form-header" md={3}>Value</Label>
                                <Col md={9}>
                                    <Control.text model=".value" id=".value" name=".value"
                                        placeholder="value(USD or LL)"
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
                                            required: 'Required, ',
                                            minLength: 'Must be greater than 3 numbers ',
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
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const  Invoice = (props) =>  {

    if (props.invoiceLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.invoiceErrMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.invoiceErrMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.invoice != null) {
        return (
            <div className="container">
                <div className="row mb-4">
                    <div className="col-7">
                        <h3>Invoice</h3>
                    </div>
                    <div className="col-5">
                        <InvoiceForm postInvoice={props.postInvoice} />
                    </div>                 
                </div>
                <div className="row">
                    <div className="col-12 overflow-auto">
                        <RenderInvoice invoice={props.invoice}
                                       postInvoice={props.postInvoice}/>
                    </div>
                </div>
            </div>
        );
    }
    else
        return(
          <div></div>
        );
}

export default Invoice;