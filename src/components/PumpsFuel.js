import React from 'react';
import { Card, CardImg, CardText} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';



    function RenderFuel ({fuel, onClick}) { 

        if(fuel.status < 25){
            return (
                <Card>
                    <Link to={`/PumpsFuel/${fuel.id}`} >
                        <CardImg className="mb-3" src='images/Fuel_low.png' style={{border: "0.5em solid #eb1c24"}} />
                        <CardText className="ml-2">Fuel Type: {fuel.name}</CardText>
                        <CardText className="ml-2">Fuel Quantity: {fuel.qty} L</CardText>
                    </Link>
                </Card>
            ); 
        }
        else{
            return (
                <Card>
                    <Link to={`/PumpsFuel/${fuel.id}`} >
                        <CardImg className="mb-3" src='images/Fuel_good.png' />
                        <CardText className="ml-2">Fuel Type: {fuel.name}</CardText>
                        <CardText className="ml-2">Fuel Quantity: {fuel.qty} L</CardText>
                    </Link>
                </Card>
            );
        }
    }

    const PumpsFuel = (props) => {

        const fuels = props.fuelPumps.map((fuel) => {
            return (
                <div className="col-8 col-md-2 ml-1 mx-auto mb-4" key={fuel.id}>
                    <RenderFuel fuel={fuel} />
                </div>
            );
        });
        if (props.fuelPumpsLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.fuelPumpsErrMess) {
            return(
                <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{props.fuelPumpsErrMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        else if (props.fuelPumps!= null){ 
            return (
                <div className="container">
                    <div className="row">
                        {/* <Breadcrumb>
                            <BreadcrumbItem active>Pumps</BreadcrumbItem>
                        </Breadcrumb> */}
                        <div className="col-12 mb-3">
                            <h3>Pumps</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row mx-auto">
                        {fuels}
                    </div>
                </div>
            );
        }
    }

export default PumpsFuel;