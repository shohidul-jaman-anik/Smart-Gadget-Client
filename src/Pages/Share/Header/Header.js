import React from 'react';
import { Nav, Navbar, NavDropdown, } from 'react-bootstrap';
import './Header.css'
import logo from '../../../Assets/logo-1.png'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import Loading from '../Loading/Loading';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)
    }

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='w-100 '>
            <Navbar collapseOnSelect expand="lg" >
                    <Navbar.Brand as={Link} to='/'>
                        <div className='header-logo '>
                            <img src={logo} alt="" />
                            <div >
                                <h3 className='m-0'>SMART GADGET</h3>
                                <p className='m-0 '> WAREHOUSING</p>
                            </div>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='navigate-link' >
                            <Nav.Link as={Link} to='/mngInventory' >Manage Inventory</Nav.Link>
                            <Nav.Link as={Link} to='/addItem' >Add Item</Nav.Link>
                            <Nav.Link as={Link} to='/mngInventory' >My Items</Nav.Link>
                            <Nav.Link as={Link} to='/blog' >Blog</Nav.Link>

                            <NavDropdown title="About" id="collasible-nav-dropdown" >
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            </NavDropdown>
                            <Nav>

                                {user ? (
                                    <button
                                    
                                        className="btn btn-link text-white text-decoration-none"
                                        onClick={handleSignOut}>
                                        <span style={{color:"#112b49"}}>Sign Out</span>
                                    </button>
                                ) : (
                                    <Nav.Link as={Link} to="/register">
                                        <span style={{color:"#112b49"}}>Sign In</span>
                                    </Nav.Link>

                                )}
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;