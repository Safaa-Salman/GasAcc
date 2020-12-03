import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

    render() {
        return(
            <div >
                <Navbar className="shadow p-0 mb-5 bg-white rounded navbar-light h5" expand="md">
                    <div className="container ">
                        <NavbarToggler onClick={this.toggleNav} /> 
                        <NavbarBrand  href="/TanksFuel"><img src='images/logo.png' width="140" height="70" alt='logo' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem >
                                <NavLink className="nav-link"  to='/TanksFuel'><span className="fas fa-burn"></span> Tanks </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/PumpsFuel'><span className="fas fa-gas-pump"></span> Pumps</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/invoice'><span className="fas fa-money-check-alt"></span> Invoice</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/receipt'><span className="fas fa-receipt"></span> Receipt</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;