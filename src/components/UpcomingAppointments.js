import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import Navbar from './Navbar'
import AppointmentNav from './AppointmentNav'

function UpcomingAppointments() {
  const [upcomingAppointments, setUpcomingAppointments] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/appointments")
      .then(r => r.json())
      .then(data => setUpcomingAppointments(data))
      .catch(err => alert(err.message))
  },[])

  function handleDelete(apptId) {
    fetch(`http://localhost:9292/appointments/${apptId}`, {
      method: "DELETE",
    })
    const updatedAppointments = upcomingAppointments.filter((appt) => appt.id !== apptId)
    setUpcomingAppointments(updatedAppointments)
  }

  function handleEdit(apptId) {
    console.log(apptId)
    // fetch(`http://localhost:9292/appointments/${appt}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   bodoy: JSON.stringify({
    //     body:
    //   })
    // })
  }

  return (
    <Stack gap={3}>
      <Navbar />
      <AppointmentNav />
      <Stack gap={3}>
        <h2>Upcoming Appointments</h2>
        <h6>Edit Appointments</h6>
        {upcomingAppointments.map((appt) => (
          <div key={appt.id}>
            <Button onClick={() => handleEdit(appt.id)} size="sm" variant="dark">Edit</Button>
            <Button onClick={() => handleDelete(appt.id)} size="sm" variant="outline-dark">x</Button>
            <h1>{appt.id}</h1>
            <h6>Appointment date/time: </h6>
            <h6>Dog: {appt.dog_id}</h6>
            <h6>Groomer: {appt.groomer_id}</h6>
            <h6>Service: {appt.service_id}</h6>
            <h6>Length: </h6>
            <h6>Cost: </h6>
          </div>
          ))}
      </Stack>
    </Stack>
  )
}

export default UpcomingAppointments  