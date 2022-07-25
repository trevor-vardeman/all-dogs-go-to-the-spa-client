import { Link } from 'react-router-dom'
import Stack from 'react-bootstrap/Stack'

function AppointmentNav() {
  return (
    <Stack gap={3} direction="horizontal">
      <Link to='/upcoming-appointments'>Upcoming Appointments</Link>
      <Link to='/create-appointment'>Create Appointment</Link>
      <Link to='/past-appointments'>Past Appointments</Link>
    </Stack>
  )
}

export default AppointmentNav