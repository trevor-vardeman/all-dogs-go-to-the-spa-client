import Navbar from './Navbar'
import Form from 'react-bootstrap/Form'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react'
import Dogs from './Dogs'

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
        console.log(array[0])
        setDogs(array[0])
        setGroomers(array[1])
        setServices(array[2])
      })
  }, [])

  return (
    <div>
      <Navbar />
      <DropdownButton
        title={dogSelect === "" ? "Select a Dog" : dogSelect}
        id="dropdown-menu-align-right"
        onSelect={(e) => setDogSelect(e)}
      >
        {dogs.map((dog) => (
          <Dropdown.Item key={dog.id} as="button" eventKey={dog.name}>{dog.name}</Dropdown.Item>
        ))}
      </DropdownButton>
      <DropdownButton
        title={groomerSelect === "" ? "Select a Groomer" : groomerSelect}
        id="dropdown-menu-align-right"
        onSelect={(e) => setGroomerSelect(e)}
      >
        {groomers.map((groomer) => (
          <Dropdown.Item key={groomer.id} as="button" eventKey={groomer.name}>{groomer.name}</Dropdown.Item>
        ))}
      </DropdownButton>
      <DropdownButton
        title={serviceSelect === "" ? "Select a Service" : serviceSelect}
        id="dropdown-menu-align-right"
        onSelect={(e) => setServiceSelect(e)}
      >
        {services.map((service) => (
          <Dropdown.Item key={service.id} as="button" eventKey={service.name}>{service.name}</Dropdown.Item>
        ))}
      </DropdownButton>
      <label for="meeting-time">Choose a time for your appointment:</label>

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Appointment time</Form.Label>
          <Form.Control type="datetime-local" size="sm" placeholder="Select a time for the appointment" />
        </Form.Group>
        <Button as="input" type="submit" value="Submit" />
      </Form>
    </div>
  )
}

export default CreateAppointment