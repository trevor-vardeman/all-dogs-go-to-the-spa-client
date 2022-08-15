import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'

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
        navigate("/appointments")
      })
  }

  function handleEdit(id) {
    navigate(`/appointments/${id}/edit`)
  }

  return (
    <Stack gap={3} className="center">
      {appointment ?
        <div key={appointment.id}>
          <h1 className="font-color">Appointment #{appointment.id}</h1>
          <li>
            <img src={appointment.dog.photo_url} alt={`${appointment.dog.name} the ${appointment.dog.breed}`}/>
            <h6><strong>Appointment date/time:</strong> {appointment.appt_datetime}</h6>
            <h6><strong>Dog:</strong> {appointment.dog.name}</h6>
            <h6><strong>{appointment.dog.name}'s Age:</strong> {appointment.dog.age}</h6>
            <h6><strong>{appointment.dog.name}'s Breed:</strong> {appointment.dog.breed}</h6>
            <h6><strong>Groomer:</strong> {appointment.groomer.name}</h6>
            <h6><strong>Service:</strong> {appointment.service.name}</h6>
            <h6><strong>Length:</strong> {appointment.service.service_length} minutes</h6>
            <h6><strong>Cost:</strong> ${appointment.service.cost}</h6>
            <Button style={{marginBottom: "10px"}} onClick={() => handleEdit(appointment.id)} size="sm" variant="dark">Edit Appointment</Button>
            <br></br>
            <Button onClick={() => handleDelete(appointment.id)} size="sm" variant="danger">Cancel Appointment</Button>
          </li>
        </div>
      : null}
    </Stack>
  )
}

export default Appointment