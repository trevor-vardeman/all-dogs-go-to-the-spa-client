import { Link } from 'react-router-dom'
import Stack from 'react-bootstrap/Stack'

function ServiceNav() {
  return (
    <Stack gap={3} direction="horizontal">
      <Link to='/services'>Current Services</Link>
      <Link to='/create-service'>Create Service</Link>
      <Link to='/archived-services'>Archived Services</Link>
    </Stack>
  )
}

export default ServiceNav