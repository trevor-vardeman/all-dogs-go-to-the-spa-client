import { Link } from 'react-router-dom'
import Stack from 'react-bootstrap/Stack'

function GroomerNav() {
  return (
    <Stack gap={3} direction="horizontal">
      <Link to='/groomers'>Current Groomers</Link>
      <Link to='/create-groomer'>Create Groomer</Link>
      <Link to='/offboarded-groomers'>Offboarded Groomers</Link>
    </Stack>
  )
}

export default GroomerNav