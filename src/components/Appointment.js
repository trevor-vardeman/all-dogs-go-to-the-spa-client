import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import Navbar from './Navbar'
import AppointmentNav from './AppointmentNav'

function Appointment() {
  const [appointment, setAppointment] = useState(null)

  const navigate = useNavigate()
  const {id} = useParams()

  useEffect(() => {
    fetch(`http://localhost:9292/appointments/${id}`)
      .then(r => r.json())
      .then(appointment => setAppointment(appointment))
      .catch(() => alert("Appointment not found!"))
  },[id])

  function handleDelete(apptId) {
    fetch(`http://localhost:9292/appointments/${apptId}`, {
      method: "DELETE",
    })
      .then(() => setAppointment(null))
      .then(() => {
        alert("Appointment cancelled!")
        navigate("/upcoming-appointments")
      })
  }

  function handleEdit(id) {
    navigate(`/appointments/edit/${id}`)
  }

  return (
    <Stack gap={3}>
      <Navbar />
      <AppointmentNav />
        {appointment ?
          <div key={appointment.id}>
            <Button onClick={() => handleEdit(appointment.id)} size="sm" variant="dark">Edit Appointment</Button>
            <Button onClick={() => handleDelete(appointment.id)} size="sm" variant="danger">Cancel Appointment</Button>
            <br></br>
            <img style={{maxWidth: "300px", maxHeight: "300px"}} src={appointment.dog.photo_url} alt={`${appointment.dog.name} the ${appointment.dog.breed}`}/>
            <h6>Appointment date/time: {appointment.appt_datetime}</h6>
            <h6>Dog: {appointment.dog.name}</h6>
            <h6>{appointment.dog.name}'s Age: {appointment.dog.age}</h6>
            <h6>{appointment.dog.name}'s Breed: {appointment.dog.breed}</h6>
            <h6>Groomer: {appointment.groomer.name}</h6>
            <h6>Service: {appointment.service.name}</h6>
            <h6>Length: {appointment.service.service_length} minutes</h6>
            <h6>Cost: ${appointment.service.cost}</h6>
          </div>
        : null}
    </Stack>
  )
}

export default Appointment