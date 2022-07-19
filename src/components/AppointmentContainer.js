import { useState } from 'react'
import Navbar from './Navbar'
import AppointmentNav from './AppointmentNav'
import Stack from 'react-bootstrap/Stack'

function AppointmentContainer() {
  const [currentAppointmentId, setCurrentAppointmentId] = useState("")

  function currentAppointment(id) {
    setCurrentAppointmentId(id)
  }

  return (
    <Stack gap={3}>
      <Navbar />
      <AppointmentNav handleApptSelection={currentAppointment} currentAppointmentId={currentAppointmentId} />
    </Stack>
  )
}

export default AppointmentContainer