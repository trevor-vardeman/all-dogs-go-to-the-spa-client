import { Link } from 'react-router-dom'
import Stack from 'react-bootstrap/Stack'

function DogNav() {
  return (
    <Stack gap={3} direction="horizontal">
      <Link to='/dogs'>Dogs</Link>
      <Link to='/create-dog'>Create Dog Profile</Link>
      <Link to='/archived-dogs'>Archived Dogs</Link>
    </Stack>
  )
}

export default DogNav