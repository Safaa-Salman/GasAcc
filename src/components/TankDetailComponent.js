/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { Card, CardImg, CardText, CardBody,
     Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

    function RenderTank({specificTank}) {
        return(
            <div>
                <Card> 
                    <CardImg top src={baseUrl + specificTank.image} />
                    <CardBody>
                    <CardText>{specificTank.fuelCapacity}</CardText>
                    <CardText>{specificTank.fuelLevel}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    function RenderPumps({tankPumps, tankPumpsErrMess, tankPumpsisLoading}) {
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
        else if (tankPumps != null){
                    return (
                        <div>
                            <h4>Pumps</h4>
                            
                                {tankPumps.map((pump) => {
                                    return(
                                        <div className="col-12 col-md-4 ml-1" key={pump.id}>
                                             <Card > 
                                                <CardImg top src={baseUrl + pump.image} />
                                                <CardBody>
                                                <CardText>{pump.id}</CardText>
                                                </CardBody>
                                            </Card>
                                       </div>
                                    );
                                })}
                           
                        </div>
                    );
            }

        else{
            return(
                <div></div>
            );
        }
    }


    const  TankDetail = (props) =>  {
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
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/TanksFuel/:fuelId">Tank Details</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.specificTank.id}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.specificTank.id}</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4 m-1">
                            <RenderTank specificTank={props.specificTank} />
                        </div>
                        <div className=" row col-md-8">
                            <RenderPumps tankPumps={props.tankPumps}
                                         tankPumpsErrMess={props.tankPumpsErrMess}
                                         tankPumpsisLoading={props.tankPumpsisLoading}
                                        />
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


export default TankDetail;