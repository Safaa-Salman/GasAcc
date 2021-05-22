/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import { Button, Row, Col, Label, Table, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';


function RenderReceipt({receipt}) {
    if (receipt != null){
                return (
                    <div>
                        <Table className="table-striped table-dark ">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Date</th>
                                    <th>Company</th>
                                    <th>Value</th>
                                    <th>Serial Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {receipt.map((receipt) => {
                                    return(
                                        <tr key={receipt.id}>
                                        <th scope="row">{receipt.id}</th>
                                        <td>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(receipt.date)))}</td>
                                        <td>{receipt.company}</td>
                                        <td>{receipt.value}</td>
                                        <td>{receipt.serialnbr}</td>
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

      handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.props.postReceipt(values.company, values.value, values.serialnbr);
        // window.location.reload();
        // this.props.resetReceiptForm();
        // event.preventDefault();
    }

    render() {
        return(
            <div className="container">     
                <div>
                    <Button  onClick={this.toggleModal} color="primary" block> Add Receipt</Button>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Receipt</ModalHeader>
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
                                <Label htmlFor="value" md={3} className="form-header">Value</Label>
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
                                <Label htmlFor="serialnbr" md={3} className="form-header">Serial number</Label>
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
                                            required: 'Required, ',
                                            minLength: 'Must be greater than 3 numbers ',
                                            isNumber: 'Must be a number'
                                        }}
                                     />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col ms={12} md={{size:6, offset: 3}}>
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

const  Receipt = (props) =>  {

    if (props.receiptLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.receiptErrMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.receiptErrMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.receipt != null) {
        return (
            <div className="container">
                <div className="row mb-4">
                    <div className="col-7">
                        <h3>Receipts</h3>
                    </div> 
                    <div className="col-12 col-md-5">
                        <InvoiceForm postReceipt={props.postReceipt} />
                    </div>                 
                </div>
                <div className="row">
                    <div className="col-12 overflow-auto">
                        <RenderReceipt receipt={props.receipt}/>
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

export default Receipt;