import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import TanksFuel from './TanksFuel';
import TankDetail from './TankDetailComponent';
import SpecificTanks from './SpecificTanksComponent';
import PumpsFuel from './PumpsFuel';
import SpecificPumps from './SpecificPumps';
import Receipt from './ReceiptComponent';
import Invoice from './InvoiceComponent';
import Sales from './SalesComponent';
import Contact from './ContactComponent';
import About from './Aboutus';
import Home from './Home';
import { postInvoice,postReceipt, postFeedback, fetchFuelPumps, fetchFuelTanks,fetchSpecificPumps, fetchSpecificTanks, fetchTankPumps, fetchInvoice, fetchReceipt,fetchSales } from '../redux/ActionCreators';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { actions } from 'react-redux-form'

const mapStateToProps = state => {
  return {
    tankPumps : state.tankPumps,
    fuelTanks : state.fuelTanks ,
    fuelPumps : state.fuelPumps,
    specificPumps: state.specificPumps,
    specificTanks: state.specificTanks,
    invoice: state.invoice,
    receipt:state.receipt,
    sales: state.sales,
  }
}

const mapDispatchToProps = dispatch => ({
  postFeedback: (firstname, lastname, telnum, email, agree, contactType, message) => dispatch(postFeedback(firstname, lastname, telnum, email, agree, contactType, message)),
  postInvoice: (company, tank, litre, value, serialnbr) => dispatch(postInvoice(company, tank, litre, value, serialnbr)),
  postReceipt: (company, value, serialnbr) => dispatch(postReceipt(company, value, serialnbr)),
  resetInvoiceForm: () => { dispatch(actions.reset('invoice'))},
  resetReceiptForm: () => { dispatch(actions.reset('receipt'))},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchInvoice: () => dispatch(fetchInvoice()),
  fetchReceipt: () => dispatch(fetchReceipt()),
  fetchFuelPumps: () => dispatch(fetchFuelPumps()),
  fetchFuelTanks: () => dispatch(fetchFuelTanks()),
  fetchSpecificPumps: () => dispatch(fetchSpecificPumps()),
  fetchSpecificTanks: () => dispatch(fetchSpecificTanks()),
  fetchTankPumps: () => dispatch(fetchTankPumps()),
  fetchSales: () => dispatch(fetchSales())
});



class Main extends Component {

  componentDidMount() {
    this.props.fetchFuelPumps();
    this.props.fetchFuelTanks();
    this.props.fetchSpecificPumps();
    this.props.fetchSpecificTanks();
    this.props.fetchTankPumps();
    this.props.fetchInvoice();
    this.props.fetchReceipt();
    this.props.fetchSales();
  }

  render() {

    const FuelTanksPage = () => {
      return(
        <TanksFuel
            fuelTanks={this.props.fuelTanks.fuelTanks}
            fuelTanksLoading={this.props.fuelTanks.isLoading}
            fuelTanksErrMess={this.props.fuelTanks.errMess}
        />
      );
    }

    const FuelPumpsPage = () => {
      return(
        <PumpsFuel 
            fuelPumps={this.props.fuelPumps.fuelPumps}
            fuelPumpsLoading={this.props.fuelPumps.isLoading}
            fuelPumpsErrMess={this.props.fuelPumps.errMess}
        />
      );
    }

    
    const FuelTanksId = ({match}) => {
      return(
        <SpecificTanks 
            specificTanks={this.props.specificTanks.specificTanks.filter((tank) => tank.fuelId === parseInt(match.params.fuelId,10))}
            SpecificTanksLoading={this.props.specificTanks.isLoading}
            SpecificTankserrMess={this.props.specificTanks.errMess}
        />
      );
    };

    const FuelPumpsId = ({match}) => {
      return(
        <SpecificPumps 
            specificPumps={this.props.specificPumps.specificPumps.filter((pump) => pump.fuelId === parseInt(match.params.fuelId,10))}
            specificPumpsLoading={this.props.specificPumps.isLoading}
            specificPumpserrMess={this.props.specificPumps.errMess}
        />
      );
    };


    const TankPumpsId = ({match}) => {
      return(
        <TankDetail 
            specificTank={this.props.specificTanks.specificTanks.filter((tank) => tank.id === parseInt(match.params.tankId,10))[0]}
            specificTankisLoading={this.props.specificTanks.isLoading}
            specificTankerrMess={this.props.specificTanks.errMess}
            tankPumps={this.props.tankPumps.tankPumps.filter((pump) => pump.tankId === parseInt(match.params.tankId,10))}
            tankPumpsErrMess={this.props.tankPumps.errMess}
            tankPumpsisLoading={this.props.tankPumps.isLoading}
        />
      );
    };

    const InvoicePage = () => {
      return(
        <Invoice 
            resetInvoiceForm={this.props.resetInvoiceForm}
            postInvoice={this.props.postInvoice}
            invoice={this.props.invoice.invoice}
            invoiceLoading={this.props.invoice.isLoading}
            invoiceErrMess={this.props.invoice.errMess}
        />
      );
    };

    const ReceiptPage = () => {
      return(
        <Receipt
            resetReceiptForm={this.props.resetInvoiceForm}
            postReceipt={this.props.postReceipt}
            receipt={this.props.receipt.receipt}
            receiptLoading={this.props.receipt.isLoading}
            receiptErrMess={this.props.receipt.errMess}
        />
      );
    };

    const SalesPage = () => {
      return(
        <Sales 
            sales={this.props.sales.sales}
            salesLoading={this.props.sales.isLoading}
            saleserrMess={this.props.sales.errMess}
        />
      );
    };

    const ContactPage = () => {
      return(
        <Contact
            resetFeedbackForm={this.props.resetFeedbackForm}
            postFeedback={this.props.postFeedback}
        />
      );
    };

    return (
      <div>
        <Header />
        <div>
          <Switch>
              <Route exact path='/TanksFuel' component={FuelTanksPage} />
              <Route exact path='/TanksFuel/:fuelId' component={FuelTanksId} />
              <Route exact path='/TanksFuel/:fuelId/Tank/:tankId' component={TankPumpsId} />
              <Route exact path='/PumpsFuel' component={FuelPumpsPage} />
              <Route path='/PumpsFuel/:fuelId' component={FuelPumpsId} />
              <Route exact path='/receipt' component={ReceiptPage} />
              <Route exact path='/invoice' component={InvoicePage} />
              <Route exact path='/sales' component={SalesPage} />
              <Route exact path='/aboutus' component={() => <About/>} />
              <Route exact path='/home' component={() => <Home/>} />
              <Route exact path='/contactus' component={ContactPage} />
              <Redirect to="/sales" />
          </Switch>
        </div>
        <Footer id="footer"/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
