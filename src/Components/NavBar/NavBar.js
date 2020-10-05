import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link, useLocation } from 'react-router-dom'
import { UserContext } from '../../App';
import logoMain from '../../logos/logoMain.png'
import './NavBar.css';

const NavBar = () => {
    const [LoggedInUser, setLoggedInUser] = useContext(UserContext);
    const location = useLocation();
    return (
        // <div className="navigation" >
        //     <Navbar style={{ marginBottom: '40px' }} collapseOnSelect expand="lg" bg="transparent">
        //         <Link to='/'><Navbar.Brand> <img className="img-fluid logo" src={logoMain} alt="logo"></img></Navbar.Brand></Link>
        //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //         <Navbar.Collapse id="responsive-navbar-nav">
        //             <Nav className="mr-auto">
        //                 <Nav.Link href='/' className="navigation-links">Home</Nav.Link>
        //                 <Nav.Link className="navigation-links">Donation</Nav.Link>
        //                 <Nav.Link className="navigation-links">Events</Nav.Link>
        //                 <Nav.Link className="navigation-links">Blog</Nav.Link>
        //                 {
        //                     LoggedInUser?.name ?
        //                         (
        //                             <Nav.Link className="navigation-links">{LoggedInUser.name}</Nav.Link>
        //                         ) :
        //                         (<Link to='/login'>
        //                             <button className="navigation-links register-btn">Register</button>
        //                         </Link>
        //                         )
        //                 }

        //             </Nav>

        //         </Navbar.Collapse>
        //     </Navbar>
        // </div>

        <div>
            <Grid container item xs={12} style={{ height: '60px', padding: '10px 20px' }} alignItems='center' >
                <Grid item xs={7}>
                    <Link to='/'><img style={{ height: '60px' }} src={logoMain} alt="volunteer network logo" /></Link>
                </Grid>
                <Grid container item xs={5} justify='space-around' className='navs'>
                    <Link to='/' className='link'><b>Home</b></Link>
                    <Link to='/' className='link'><b>Donation</b></Link>
                    <Link to='/' className='link'><b>Events</b></Link>
                    <Link to='/' className='link'><b>Blog</b></Link>
                    {
                        LoggedInUser?.name ?
                            (   <Link to='/'>
                                <h4 className="name">{LoggedInUser.name}</h4>
                                </Link>
                            ) :
                            (<Link to='/login'>
                                <Button className='link' variant="outlined" color="primary">
                                    Register
                                </Button>
                            </Link>
                            )
                    }
                    {
                    
                        <Link to ='/admin'><Button className='link' variant="outlined" color="secondary">Admin</Button></Link>
                    
                }
                </Grid>
            </Grid>
        </div>

    );
};

export default NavBar;