import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import Form from 'react-bootstrap/Form'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

function CreateAppointment() {
  const [dogs, setDogs] = useState([])
  const [groomers, setGroomers] = useState([])
  const [services, setServices] = useState([])
  const [dogSelect, setDogSelect] = useState("")
  const [groomerSelect, setGroomerSelect] = useState("")
  const [serviceSelect, setServiceSelect] = useState("")
  const [appointmentTime, setAppointmentTime] = useState("")

  const navigate = useNavigate()

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
    if (!dogSelect || !groomerSelect || !serviceSelect || !appointmentTime) {
      alert("Please fill out the entire form.")
    } else {
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
          navigate('/appointments')
        })
    }
    }

  return (
    <Stack gap={3} className="center">
      <div>
        <h1 className="font-color">Create an Appointment</h1>
        <p>If you don't see a dog, groomer, or service, go to their pages above to create a new profile or unarchive an existing profile.</p>
      </div>
      <div>
        <Stack gap={3}>
          <DropdownButton
            title={dogSelect === "" ? "Select a Dog" : dogSelect}
            id="dropdown-menu-align-right"
            variant="dark"
          >
            {dogs.map((dog) => (
              <Dropdown.Item onClick={(e) => setDogSelect(e.target.innerText)} key={dog.id} eventKey={dog.name}>{dog.name}</Dropdown.Item>
            ))}
          </DropdownButton>
          <DropdownButton
            title={groomerSelect === "" ? "Select a Groomer" : groomerSelect}
            id="dropdown-menu-align-right"
            variant="dark"
          >
            {groomers.map((groomer) => (
              <Dropdown.Item onClick={(e) => setGroomerSelect(e.target.innerText)} key={groomer.id} eventKey={groomer.name}>{groomer.name}</Dropdown.Item>
            ))}
          </DropdownButton>
          <DropdownButton
            title={serviceSelect === "" ? "Select a Service" : serviceSelect}
            id="dropdown-menu-align-right"
            variant="dark"
          >
            {services.map((service) => (
              <Dropdown.Item onClick={(e) => setServiceSelect(e.target.innerText)} key={service.id} eventKey={service.name}>{service.name}</Dropdown.Item>
            ))}
          </DropdownButton>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label><strong>Appointment date/time:</strong></Form.Label>
              <Form.Control onChange={(e) => setAppointmentTime(e.target.value)} type="datetime-local" size="sm" />
            </Form.Group>
            <Button onClick={handleSubmit} as="input" type="submit" value="Submit" />
          </Form>
        </Stack>
      </div>
    </Stack>
  )
}

export default CreateAppointment