import React from 'react';
import { Card, CardImg, CardText, } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';


    function RenderTank ({tank, onClick}) {

        if(tank.status < 25){
            return (
                <Card>
                    <Link to={`/TanksFuel/${tank.fuelId}/Tank/${tank.id}`} >
                        <CardImg className="mb-3" src='../images/Tank_low.jpg' style={{border: "0.5em solid #eb1c24"}}/>
                        <CardText className="ml-2">Fuel Capacity: {tank.fuelCapacity}L</CardText>
                        <CardText className="ml-2">Fuel Level: {tank.fuelLevel}L</CardText>
                    </Link>
                </Card>
            );
        }
        else{
            return (
                <Card>
                    <Link to={`/TanksFuel/${tank.fuelId}/Tank/${tank.id}`} >
                        <CardImg className="mb-3" src='../images/Tank_good.jpg' />
                        <CardText className="ml-2">Fuel Capacity: {tank.fuelCapacity}L</CardText>
                        <CardText className="ml-2">Fuel Level: {tank.fuelLevel}L</CardText>
                    </Link>
                </Card>
            );
        }
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
                        {/* <Breadcrumb>
                            <BreadcrumbItem><Link to="/TanksFuel">Tanks</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.specificTanks[0].fuelId}</BreadcrumbItem>
                        </Breadcrumb> */}
                        <div className="col-12 mb-3">
                            <h3>Tanks of fuel type: {props.specificTanks[0].fuelname}</h3>
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
  