import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import AppointmentNav from './AppointmentNav'
import Stack from 'react-bootstrap/Stack'

function PastAppointments() {
  const [pastAppointments, setPastAppointments] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/past-appointments")
      .then(r => r.json())
      .then(data => setPastAppointments(data))
      .catch(err => alert(err.message))
  },[])

  return (
    <Stack gap={3}>
      <Navbar />
      <AppointmentNav />
      <Stack gap={3}>
        <h2>Past Appointments</h2>
        {pastAppointments.map((appt) => (
          <div key={appt.id}>
            <h6>Appointment date/time: </h6>
            <h6>Dog: {appt.dog_id}</h6>
            <h6>Groomer: {appt.groomer_id}</h6>
            <h6>Service:{appt.service_id}</h6>
            <h6>Length: </h6>
            <h6>Cost: </h6>
          </div>
          ))}
      </Stack>
    </Stack>
  )
}

export default PastAppointments