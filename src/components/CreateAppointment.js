import Navbar from './Navbar'
import Form from 'react-bootstrap/Form'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react'

function CreateAppointment() {
  const [dogs, setDogs] = useState([])
  const [groomers, setGroomers] = useState([])
  const [services, setServices] = useState([])
  const [dogSelect, setDogSelect] = useState("")
  const [groomerSelect, setGroomerSelect] = useState("")
  const [serviceSelect, setServiceSelect] = useState("")
  const [appointmentTime, setAppointmentTime] = useState("")

  useEffect(() => {
    fetch("http://localhost:9292/create-appointment")
      .then((r) => r.json())
      .then((array) => {
        setDogs(array[0])
        setGroomers(array[1])
        setServices(array[2])
      })
  }, [])

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
    fetch("http://localhost:9292/create-appointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointmentData),
    })
      .then(() => {
        alert("Appointment saved!")
        setDogSelect("")
        setGroomerSelect("")
        setServiceSelect("")
        setAppointmentTime("")
      })
    }

  return (
    <div>
      <Navbar />
      <h2>Create an Appointment</h2>
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
      <label>Choose a time for your appointment:</label>

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Appointment time</Form.Label>
          <Form.Control onChange={(e) => setAppointmentTime(e.target.value)} type="datetime-local" size="sm" placeholder="Select a time for the appointment" />
        </Form.Group>
        <Button onClick={handleSubmit} as="input" type="submit" value="Submit" />
      </Form>
    </div>
  )
}

export default CreateAppointment