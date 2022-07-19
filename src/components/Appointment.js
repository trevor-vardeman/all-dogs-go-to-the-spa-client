import { useState, useEffect } from 'react'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import Navbar from './Navbar'
import AppointmentNav from './AppointmentNav'

function Appointment() {
  const [appointment, setAppointment] = useState(null)

  useEffect(() => {
    let id = document.location.href.split('/')[4]
    fetch(`http://localhost:9292/appointments/${id}`)
      .then(r => r.json())
      .then(appointment => setAppointment(appointment))
      .catch(err => alert("Appointment not found!"))
  },[])

  function handleDelete(apptId) {
    fetch(`http://localhost:9292/appointments/${apptId}`, {
      method: "DELETE",
    })
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
        {appointment ?
          <div key={appointment.id}>
            <Button onClick={() => handleEdit(appointment.id)} size="sm" variant="dark">Edit</Button>
            <Button onClick={() => handleDelete(appointment.id)} size="sm" variant="outline-dark">x</Button>
            <h1>{appointment.id}</h1>
            <h6>Appointment date/time: </h6>
            <h6>Dog: {appointment.dog_id}</h6>
            <h6>Groomer: {appointment.groomer_id}</h6>
            <h6>Service: {appointment.service_id}</h6>
            <h6>Length: </h6>
            <h6>Cost: </h6>
          </div>
        : null}
    </Stack>
  )
}

export default Appointment