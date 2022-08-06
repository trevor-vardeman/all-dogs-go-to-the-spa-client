import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

function NavBar() {
  return (
    <Stack gap={3} direction="horizontal" style={{justifyContent: "center"}}>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">App Name</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="me-auto">
            <Nav>
              <NavDropdown title="Appointments" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/appointments">Upcoming Appointments</NavDropdown.Item>
                <NavDropdown.Item href="/create-appointment">Create Appointment</NavDropdown.Item>
                <NavDropdown.Item href="/past-appointments">Past Appointment</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Dogs" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/dogs">Active Dogs</NavDropdown.Item>
                <NavDropdown.Item href="/create-dog">Create Dog Profile</NavDropdown.Item>
                <NavDropdown.Item href="/archived-dogs">Archived Dogs</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Groomers" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/groomers">Current groomers</NavDropdown.Item>
                <NavDropdown.Item href="/create-groomer">Create Groomer Profile</NavDropdown.Item>
                <NavDropdown.Item href="/offboarded-groomers">Offboarded Groomers</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Services" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/services">Current Services</NavDropdown.Item>
                <NavDropdown.Item href="/create-service">Create Service</NavDropdown.Item>
                <NavDropdown.Item href="/archived-services">Archived Services</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Stack>  
  )
}

export default NavBar