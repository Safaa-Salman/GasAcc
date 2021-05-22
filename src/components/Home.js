import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


function Home() {

    return(
        <div className="container Home overflow-hidden">
            <div className="row">
                <div className="col-md-5 mt-5">
                    <h1 className="mt-5">Why GasAcc?</h1>
                    <p className="mt-3">Gasacc offers you an ammazing experience withLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                    <h6>"We experienced the Business, We Know what works best for it"</h6>
                    <Link to={`/aboutus`} >
                        <Button type="submit" color="primary" className="rounded mt-4 offset-3">Learn more </Button>
                    </Link>
                </div>
                <div className="col-md-7">
                    <img src='images/Home_1.png' width="100%" height="100%" alt='statistics' />
                </div>                 
            </div>
            <div className="row">
                <div className="col-12 mt-5">
                    <h3>Features</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content offset-1">
                <div className="col-11 col-md-4">
                    <img src='images/Home_2.png' width="90%" height="90%" alt='Gas Station' />
                </div>
                <div className="col-11 col-md-6 offset-1">
                    <h5>No more papers and calculators!</h5>
                    <p>No more exhausting calculations every day withLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                </div>
            </div>
            <div className="row row-content offset-1">
                <div className="col-11 col-md-5 offset-1 order-sm-2">
                    <img src='images/Home_3.png' width="90%" height="90%" alt='counter' />
                </div>
                <div className="col-11 col-md-5 order-sm-1">
                    <h5>The easiest solution just for you</h5>
                    <p>Gasacc offers you an ammazing experience withLorem ipsum dolor sit amet, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
            </div>
            <div className="row row-content offset-1">
                <div className="col-11 col-md-4">
                    <img src='images/chip.png' width="90%" height="90%" alt='counter' />
                </div>
                <div className="col-11 col-md-6 offset-1">
                    <h5>About our Product!</h5>
                    <p>With this chip you can now Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            <div className="row row-content offset-1">
                <div className="col-11 col-md-5 offset-1 order-sm-2">
                    <img src='images/Home_6.png' width="90%" height="90%" alt='counter' />
                </div>
                <div className="col-11 col-md-5  order-sm-1">
                    <h5>Get the most out of Gasacc with our premium version!</h5>
                    <p>With Gasacc Premium you can now Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;