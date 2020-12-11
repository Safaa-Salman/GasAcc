import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';


function About(props) {

    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content mt-5">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Started in 2010, Bla Bla quickly  it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                    <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                </div>
                <div className="col-12 col-md-5 offset-1">
                    <img src='images/GasStation.jpg' width="80%" height="90%" alt='Gas Station' />
                </div>
            </div>
            <div className="row row-content mt-5">
                 <div className="col-12 col-md-6">
                    <img src='images/counter.jpg' width="70%" height="70%" alt='counter' />
                </div>
                <div className="col-12 col-md-5 mt-2">
                    <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                </div>
            </div>
        </div>
    );
}

export default About;