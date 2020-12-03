import React, { Component } from 'react';
import Header from './HeaderComponent';
import TanksFuel from './TanksFuel';
import TankDetail from './TankDetailComponent';
import SpecificTanks from './SpecificTanksComponent';
import PumpsFuel from './PumpsFuel';
import SpecificPumps from './SpecificPumps';
import Receipt from './ReceiptComponent';
import Invoice from './InvoiceComponent';
import { postInvoice,postReceipt, fetchFuelPumps, fetchFuelTanks,fetchSpecificPumps, fetchSpecificTanks, fetchTankPumps } from '../redux/ActionCreators';
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
  }
}

const mapDispatchToProps = dispatch => ({
  postInvoice: (company, tank, litre, value, serialnbr) => dispatch(postInvoice(company, tank, litre, value, serialnbr)),
  postReceipt: (company, value, serialnbr) => dispatch(postReceipt(company, value, serialnbr)),
  resetInvoiceForm: () => { dispatch(actions.reset('invoice'))},
  resetReceiptForm: () => { dispatch(actions.reset('receipt'))},
  fetchFuelPumps: () => dispatch(fetchFuelPumps()),
  fetchFuelTanks: () => dispatch(fetchFuelTanks()),
  fetchSpecificPumps: () => dispatch(fetchSpecificPumps()),
  fetchSpecificTanks: () => dispatch(fetchSpecificTanks()),
  fetchTankPumps: () => dispatch(fetchTankPumps())
});



class Main extends Component {

  componentDidMount() {
    this.props.fetchFuelPumps();
    this.props.fetchFuelTanks();
    this.props.fetchSpecificPumps();
    this.props.fetchSpecificTanks();
    this.props.fetchTankPumps();
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
        />
      );
    };

    const ReceiptPage = () => {
      return(
        <Receipt
            resetReceiptForm={this.props.resetInvoiceForm}
            postReceipt={this.props.postReceipt}
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
              <Redirect to="/TanksFuel" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
