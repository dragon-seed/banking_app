import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom'


const Header = () => {

    const navigate = useNavigate();

    return (
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Banking App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <Nav.Link href="#link">My Account</Nav.Link>
            <NavDropdown title="Transactions" id="basic-nav-dropdown">
              <NavDropdown.Item href="/#/deposit">Deposit</NavDropdown.Item>
              <NavDropdown.Item href="/#/withdraw">
                Withdraw
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Transfers</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => {
                   localStorage.removeItem('userInfo');
                   navigate('/');
               }} >
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Header