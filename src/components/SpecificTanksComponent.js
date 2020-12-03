import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';


    function RenderTank ({tank, onClick}) {
        return (
            <Card>
                <Link to={`/TanksFuel/${tank.fuelId}/Tank/${tank.id}`} >
                    <CardImg className="mb-3"src={baseUrl + tank.image} />
                    <CardText className="ml-3">Fuel Capacity: {tank.fuelCapacity}</CardText>
                    <CardText className="ml-3">Fuel Level: {tank.fuelLevel}</CardText>
                </Link>
            </Card>
        );
    }

    const SpecificTanks = (props) => {

        const tanks = props.specificTanks.map((tank) => {
            return (
                <div className="col-8 col-md-2 ml-1 mx-auto mb-4"  key={tank.id}>
                    <RenderTank tank={tank} />
                </div>
            );
        });
        if (props.SpecificTanksLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.SpecificTankserrMess) {
            return(
                <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{props.SpecificTankserrMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }

        else if(props.specificTanks != null){ 
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/TanksFuel">Tanks</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.specificTanks[0].fuelId}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12 mb-3">
                            <h3>Tanks of fuel type: {props.specificTanks[0].fuelId}</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row mx-auto">
                        {tanks}
                    </div>
                </div>
            );
        }
        
    }

export default SpecificTanks;
  