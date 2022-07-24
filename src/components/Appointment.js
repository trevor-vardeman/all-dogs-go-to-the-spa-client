import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import Stack from 'react-bootstrap/Stack'
import Form from 'react-bootstrap/Form'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import Navbar from './Navbar'
import AppointmentNav from './AppointmentNav'

function Appointment() {
  const [appointment, setAppointment] = useState(null)
  const [editMode, setEditMode] = useState(false)

  const navigate = useNavigate()
  const {id} = useParams()

  useEffect(() => {
    fetch(`http://localhost:9292/appointments/${id}`)
      .then(r => r.json())
      .then(appointment => setAppointment(appointment))
      .catch(() => alert("Appointment not found!"))
  },[])

  function handleDelete(apptId) {
    fetch(`http://localhost:9292/appointments/${apptId}`, {
      method: "DELETE",
    })
      .then(() => setAppointment(null))
      .then(() => navigate("/upcoming-appointments"))
  }

  function handleEdit(apptId) {
    console.log(apptId)
    setEditMode(true)
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
        {appointment && !editMode ?
          <div key={appointment.id}>
            <Button onClick={() => handleEdit(appointment.id)} size="sm" variant="dark">Edit</Button>
            <Button onClick={() => handleDelete(appointment.id)} size="sm" variant="outline-dark">x</Button>
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
        : null
      //   <Stack gap={3}>
      //   <DropdownButton
      //     title={dogSelect === "" ? "Select a Dog" : dogSelect}
      //     id="dropdown-menu-align-right"
      //   >
      //     {dogs.map((dog) => (
      //       <Dropdown.Item onClick={(e) => setDogSelect(e.target.innerText)} key={dog.id} eventKey={dog.name}>{dog.name}</Dropdown.Item>
      //     ))}
      //   </DropdownButton>
      //   <DropdownButton
      //     title={groomerSelect === "" ? "Select a Groomer" : groomerSelect}
      //     id="dropdown-menu-align-right"
      //   >
      //     {groomers.map((groomer) => (
      //       <Dropdown.Item onClick={(e) => setGroomerSelect(e.target.innerText)} key={groomer.id} eventKey={groomer.name}>{groomer.name}</Dropdown.Item>
      //     ))}
      //   </DropdownButton>
      //   <DropdownButton
      //     title={serviceSelect === "" ? "Select a Service" : serviceSelect}
      //     id="dropdown-menu-align-right"
      //   >
      //     {services.map((service) => (
      //       <Dropdown.Item onClick={(e) => setServiceSelect(e.target.innerText)} key={service.id} eventKey={service.name}>{service.name}</Dropdown.Item>
      //     ))}
      //   </DropdownButton>
      //   <label>Choose a time for your appointment:</label>

      //   <Form>
      //     <Form.Group className="mb-3">
      //       <Form.Label>Appointment time</Form.Label>
      //       <Form.Control onChange={(e) => setAppointmentTime(e.target.value)} type="datetime-local" size="sm" placeholder="Select a time for the appointment" />
      //     </Form.Group>
      //     <Button onClick={handleSubmit} as="input" type="submit" value="Submit" />
      //   </Form>
      // </Stack>
    }
    </Stack>
  )
}

export default Appointment