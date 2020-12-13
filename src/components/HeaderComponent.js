import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, UncontrolledDropdown,DropdownToggle, DropdownItem, DropdownMenu} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FaDollarSign, FaGasPump, FaFileInvoiceDollar, FaPhoneAlt, FaHome} from 'react-icons/fa';
import { BsGraphUp, BsInfoCircle} from "react-icons/bs";
import { GiFuelTank } from "react-icons/gi";
import { IoReceipt } from "react-icons/io5";
import { RiBuildingLine } from "react-icons/ri";


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
                        <NavbarBrand  href="/sales"><img src='images/logo.png' width="140" height="70" alt='logo' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem >
                                    <NavLink className="nav-link"  to='/home'> Home </NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                         Financial Reports
                                    </DropdownToggle>
                                    <DropdownMenu left>
                                        <DropdownItem>
                                            <NavLink className="nav-link"  to='/sales'><BsGraphUp/> Sales </NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink className="nav-link"  to='/invoice'><FaFileInvoiceDollar/> Invoice</NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink className="nav-link" to='/receipt'><IoReceipt/> Receipt</NavLink>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                         Station
                                    </DropdownToggle>
                                    <DropdownMenu left>
                                        <DropdownItem>
                                            <NavLink className="nav-link"  to='/TanksFuel'><GiFuelTank/> Tanks </NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink className="nav-link" to='/PumpsFuel'><FaGasPump/> Pumps</NavLink>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem>
                                    <NavLink className="nav-link" to='/contactus'> Contact Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/aboutus'> About Us</NavLink>
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