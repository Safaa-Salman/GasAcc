import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function Home() {

    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3>Features</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content mb-6 mt-5 offset-1">
                <div className="col-12 col-md-5">
                    <img src='images/GasStation2.jpg' width="90%" height="90%" alt='Gas Station' />
                </div>
                <div className="col-12 col-md-4 mt-4 offset-1">
                    <h5>"We experienced the Business, We Know what works best for it"</h5>
                </div>
            </div>
            <div className="row row-content mt-5 offset-1" id="background">
                <div className="col-12 col-md-5 mt-5">
                    <h5>The easiest solution just for you</h5>
                    <p>Gasacc offers you an ammazing experience withLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
                <div className="col-12 col-md-6 offset-1 mt-5">
                    <img src='images/stat1.jpg' width="70%" height="70%" alt='counter' />
                </div>
            </div>
            <div className="row row-content mt-5 offset-1">
                <div className="col-12 col-md-5">
                    <img src='images/counter.jpg' width="70%" height="70%" alt='counter' />
                </div>
                <div className="col-12 col-md-5 offset-1">
                    <h5>About ou Product!</h5>
                    <p>With this chip you can now Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            <div className="row row-content mt-5 offset-1">
                <div className="col-12 col-md-5 ">
                    <h5>Get the most out of Gasacc with our premium version!</h5>
                    <p>With Gasacc Premium you can now Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="col-12 col-md-5 offset-1">
                    <img src='images/stat2.png' width="80%" height="80%" alt='Gas Station' />
                </div>
            </div>
        </div>
    );
}

export default Home;