import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';


    function RenderPump ({pump, onClick}) {
        return (
            <Card >
                <Link to={`/PumpsFuel/${pump.fuelId}`} >
                    <CardImg className="mb-3" src="images/pump.jpg" />
                    <CardText className="ml-3">Pump Count:{pump.count}</CardText>
                </Link>
            </Card>
        );
    }

    const SpecificPumps = (props) => {

        const pumps = props.specificPumps.map((pump) => {
            return (
                <div className="col-8 col-md-2 ml-1 mx-auto mb-4" key={pump.id}>
                    <RenderPump pump={pump} />
                </div>
            );
        });
        if (props.specificPumpsLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.specificPumpserrMess) {
            return(
                <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{props.specificPumpserrMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        else if (props.specificPumps != null){ 
            return (
                <div className="container">
                    <div className="row">
                    <Breadcrumb>
                            <BreadcrumbItem><Link to="/PumpsFuel">Pumps</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.specificPumps[0].fuelId}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12 mb-3">
                            <h3>Pumps of fuel type: {props.specificPumps[0].fuelId}</h3>
                            <hr/>
                        </div>                
                    </div>
                    <div className="row mx-auto">
                        {pumps}
                    </div>
                </div>
            );
        }
    }

export default SpecificPumps;
  