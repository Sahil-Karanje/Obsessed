import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import user from '../../Assets/icons8-user-30.png'
import cart from '../../Assets/cart.png'
import search from '../../Assets/icons8-search-30.png'
import { Link } from 'react-router-dom';
import './Navbar.css'

const NavbarContainer = () => {  

  return (
    <Navbar expand="lg" id='obsessed_navbar' className="bg-dark navbar-dark">
      <Container fluid>
        <Link to='/' style={{ textDecoration: 'none' }}><Navbar.Brand style={{ color: '#eeba2b' }}>  Obsessed </Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

            <Nav.Link><Link to='/menProducts' style={{ textDecoration: 'none', color: '#c2c2c2' }}>  Men</Link></Nav.Link>
            <Nav.Link><Link to='/womenProducts' style={{ textDecoration: 'none', color: '#c2c2c2' }}>  Women</Link></Nav.Link>
            <Nav.Link><Link to='/accessories' style={{ textDecoration: 'none', color: '#c2c2c2' }}>  Accessories</Link></Nav.Link>

          </Nav>

          <div className="right-navbar" style={{ display: 'flex', justifyContent: 'space-between', width: '8%', marginRight: '10px' }}>
            <Nav.Link style={{ backgroundColor: 'white', borderRadius: '50%' }}> <Link to='/search'> <img src={search} alt='' style={{ width: '100%' }} /> </Link> </Nav.Link>
            <Nav.Link style={{ backgroundColor: 'white', borderRadius: '50%' }}> <Link to='/user'> <img src={user} alt='' style={{ width: '100%' }} /> </Link> </Nav.Link>
            <Nav.Link style={{ backgroundColor: 'white', borderRadius: '50%' }}> <Link to='/cart'> <img src={cart} alt='' style={{ width: '100%' }} /> </Link> </Nav.Link>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarContainer;