import Stack from 'react-bootstrap/Stack'
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <Stack gap={3} direction="horizontal" style={{ borderColor: 'red', borderStyle: 'groove', borderWidth: 'thick'}}>
      <Link to='/'>Home</Link>
      <Link to='/create-appointment'>Create Appointment</Link>
      <Link to='/appointments'>Upcoming Appointments</Link>
      <Link to='/past-appointments'>Past Appointments</Link>
      <Link to='/dogs'>Dogs</Link>
      <Link to='/groomers'>Groomers</Link>
      <Link to='/services'>Services</Link>
    </Stack>  
  )
}

export default NavBar