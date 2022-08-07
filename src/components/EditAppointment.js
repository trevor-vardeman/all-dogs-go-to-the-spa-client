import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import Stack from 'react-bootstrap/Stack'
import Form from 'react-bootstrap/Form'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'

function EditAppointment() {
  const [dogs, setDogs] = useState([])
  const [groomers, setGroomers] = useState([])
  const [services, setServices] = useState([])
  const [dogSelect, setDogSelect] = useState("")
  const [groomerSelect, setGroomerSelect] = useState("")
  const [serviceSelect, setServiceSelect] = useState("")
  const [appointmentTime, setAppointmentTime] = useState("")

  const navigate = useNavigate()
  const {id} = useParams()

  useEffect(() => {
    fetch("http://localhost:9292/create-appointment")
      .then((r) => r.json())
      .then((array) => {
        setDogs(array[0])
        setGroomers(array[1])
        setServices(array[2])
      })
  }, [])

  useEffect(() => {
    fetch(`http://localhost:9292/appointments/${id}`)
      .then(r => r.json())
      .then(appointment => {
        setDogSelect(appointment.dog.name)
        setGroomerSelect(appointment.groomer.name)
        setServiceSelect(appointment.service.name)
        setAppointmentTime(appointment.appt_datetime)
      })
      .catch(() => alert("Appointment not found!"))
  },[id])

  function handleSubmit(e) {
    e.preventDefault()
    const dogId = dogs.find(dog => dog.name === dogSelect).id
    const groomerId = groomers.find(groomer => groomer.name === groomerSelect).id
    const serviceId = services.find(service => service.name === serviceSelect).id
    const appointmentData = {
      dog_id: dogId,
      groomer_id: groomerId,
      service_id: serviceId,
      appt_datetime: appointmentTime,
    }
    fetch(`http://localhost:9292/appointments/edit/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointmentData),
    })
      .then(() => {
        alert("Appointment updated!")
        setDogSelect("")
        setGroomerSelect("")
        setServiceSelect("")
        setAppointmentTime("")
        navigate("/appointments")
      })
      .catch(err => alert(err.message))
    }

  return (
    <Stack gap={3} className="center">
      <h2>Edit Appointment</h2>
      <div>
        <Stack gap={3}>
          <DropdownButton
            title={dogSelect === "" ? "Select a Dog" : dogSelect}
            id="dropdown-menu-align-right"
          >
            {dogs.map((dog) => (
              <Dropdown.Item onClick={(e) => setDogSelect(e.target.innerText)} key={dog.id} eventKey={dog.name}>{dog.name}</Dropdown.Item>
            ))}
          </DropdownButton>
          <DropdownButton
            title={groomerSelect === "" ? "Select a Groomer" : groomerSelect}
            id="dropdown-menu-align-right"
          >
            {groomers.map((groomer) => (
              <Dropdown.Item onClick={(e) => setGroomerSelect(e.target.innerText)} key={groomer.id} eventKey={groomer.name}>{groomer.name}</Dropdown.Item>
            ))}
          </DropdownButton>
          <DropdownButton
            title={serviceSelect === "" ? "Select a Service" : serviceSelect}
            id="dropdown-menu-align-right"
          >
            {services.map((service) => (
              <Dropdown.Item onClick={(e) => setServiceSelect(e.target.innerText)} key={service.id} eventKey={service.name}>{service.name}</Dropdown.Item>
            ))}
          </DropdownButton>
          <p>Current appointment date and time: {appointmentTime}</p>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>New appointment date/time:</Form.Label>
              <Form.Control onChange={(e) => setAppointmentTime(e.target.value)} type="datetime-local" size="sm" />
            </Form.Group>
            <Button onClick={handleSubmit} as="input" type="submit" value="Submit" />
          </Form>
        </Stack>
      </div>
    </Stack>
  )
}

export default EditAppointment