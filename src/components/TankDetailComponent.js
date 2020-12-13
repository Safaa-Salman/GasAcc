/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { Card, CardImg, CardText, CardBody,
     Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

    function RenderTank({specificTank}) {
        if(specificTank.status < 25){
            return(
                <div className="row">
                    <Card className="col-12 col-md-3 offset-3 mb-2"> 
                        <CardImg top src='../../../images/Tank_low.jpg' style={{width:"50%", border: "0.5em solid #eb1c24"}} />
                    </Card>
                    <div className="col-12 col-md-5">
                        <h4>Fuel Capacity: {specificTank.fuelCapacity}L </h4>
                        <h4>Fuel Level: {specificTank.fuelLevel}L </h4>
                    </div>
                </div>
            ); 
        }
        else{
            return(
                <div  className="row">
                    <Card className="col-12 col-md-3 offset-3 mb-2"> 
                        <CardImg top src='../../../images/Tank_good.jpg' style={{width:"50%"}} />
                    </Card>
                    <div className="col-12 col-md-5">
                        <h4>Fuel Capacity: {specificTank.fuelCapacity}L </h4>
                        <h4>Fuel Level: {specificTank.fuelLevel}L </h4>
                    </div>
                </div>
            );
        }
    }

    function RenderPumps({tankPump, tankPumpsErrMess, tankPumpsisLoading}) {
        if (tankPumpsisLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (tankPumpsErrMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{tankPumpsErrMess}</h4>
                    </div>
                </div>
            );
        }
        else if (tankPump != null){
                    return (                
                        <Card> 
                            <CardImg top src="../../../images/pump.jpg" />
                            <CardBody>
                            <CardText>Pump number {tankPump.id}</CardText>
                            </CardBody>
                        </Card>
                     );  
        }

        else{
            return(
                <div></div>
            );
        }
    }


    const  TankDetail = (props) =>  {

        const tankPumps = props.tankPumps.map((tankPump) => {
            return (
                <div className="col-8 col-md-2 ml-1 mx-auto mb-4" key={tankPump.id}>
                    <RenderPumps tankPump={tankPump}
                                         tankPumpsErrMess={props.tankPumpsErrMess}
                                         tankPumpsisLoading={props.tankPumpsisLoading}
                                        />
                </div>
            );
        });

        if (props.specificTankisLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.specificTankerrMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{props.specificTankerrMess}</h4>
                    </div>
                </div>
            );
        }
        else if (props.specificTank != null ) {
            return (
                <div className="container">
                    <div className="row">
                        {/* <Breadcrumb>
                            <BreadcrumbItem><Link to="/TanksFuel/:fuelId">Tank Details</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.specificTank.id}</BreadcrumbItem>
                        </Breadcrumb> */}
                        <div className="col-12">
                            <h3>Details of Tank {props.specificTank.id}</h3>
                            <hr />
                        </div>                
                    </div>

                    <RenderTank specificTank={props.specificTank} />

                    <div className="row">
                        <div className="col-12 mt-5">
                            <h3>Connected Pumps:</h3>
                            <hr/>
                        </div>
                    </div>
                    <div className="row mx-auto">
                        {tankPumps}
                    </div>
                </div>
                
            );
        }
        else
            return(
              <div></div>
            );
    }


export default TankDetail;