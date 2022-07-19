import { Link } from "react-router-dom"
import Stack from 'react-bootstrap/Stack'

function NavBar() {
  return (
    <Stack gap={3} direction="horizontal" style={{ borderColor: 'red', borderStyle: 'groove', borderWidth: 'thick'}}>
      <Link to='/'>Home</Link>
      <Link to='/appointments'>Appointments</Link>
      <Link to='/dogs'>Dogs</Link>
      <Link to='/groomers'>Groomers</Link>
      <Link to='/services'>Services</Link>
    </Stack>  
  )
}

export default NavBar