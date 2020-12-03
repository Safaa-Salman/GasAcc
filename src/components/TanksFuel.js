import React from 'react';
import { Card, CardImg,
    CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';


    function RenderFuel ({fuel, onClick}) { 
        return (
            <Card>
                <Link to={`/TanksFuel/${fuel.id}`} >
                    <CardImg className="mb-3" src={baseUrl + fuel.image} />
                    <CardText className="ml-3">Fuel Count: {fuel.count}</CardText>
                </Link>
            </Card>
        );
    }

    const TanksFuel = (props) => {

        const fuels = props.fuelTanks.map((fuel) => {
            return (
                <div className="col-8 col-md-2 ml-1 mx-auto mb-4"  key={fuel.id}>
                    <RenderFuel fuel={fuel} />
                </div>
            );
        });
        if (props.fuelTanksLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.fuelTanksErrMess) {
            return(
                <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{props.fuelTanksErrMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        else if(props.fuelTanks!= null){ 
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem active>Tanks</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12 mb-3">
                            <h3>Tanks</h3>
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

export default TanksFuel;
  

