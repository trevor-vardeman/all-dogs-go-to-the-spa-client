import Navbar from './Navbar'
import AppointmentNav from './AppointmentNav'
import Stack from 'react-bootstrap/Stack'

function Appointments() {
  return (
    <Stack gap={3}>
      <Navbar />
      <AppointmentNav />
    </Stack>
  )
}

export default Appointments