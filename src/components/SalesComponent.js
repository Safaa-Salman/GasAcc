import React  from 'react';
import { Breadcrumb, BreadcrumbItem, Table, Button } from 'reactstrap';
import { Loading } from './LoadingComponent';


function RenderSales({sales}) {
    if (sales != null){
                return (
                    <div>
                        <Table className="table-striped table-dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Fuel Type</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sales.map((sales) => {
                                    return(
                                        <tr key={sales.id}>
                                        <th scope="row">{sales.id}</th>
                                        <td>{sales.fueltype}</td>
                                        <td>{sales.qty}</td>
                                    </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </div>
                );
        }

    else{
        return(
            <div></div>
        );
    }
}



const  Sales  = (props) =>  {

    if (props.salesLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.saleserrMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.saleserrMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.sales != null) {
        return (
            <div className="container">
                <div>
                        <h3>Sales</h3>
                        <hr className="row mb-4"/>               
                </div>

                <div className="row mb-4">
                    <div className="col-4">
                        <Button type="submit" color="primary" block>Today</Button>
                    </div>
                    <div className="col-4">
                        <Button type="submit" color="primary" block>This Month</Button>
                    </div>
                    <div className="col-4">
                        <Button type="submit" color="primary" block>Last Month</Button>
                    </div>
                </div>
                                    
                <div className="row">
                    <div className="col-12 overflow-auto">
                        <RenderSales sales={props.sales}/>
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

export default Sales;