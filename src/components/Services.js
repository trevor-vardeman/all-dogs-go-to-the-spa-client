import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'

function Services() {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/services")
      .then(r => r.json())
      .then(data => setServices(data))
      .catch(err => alert(err.message))
  },[])

  function handleArchive(service) {
    const serviceData = {
      name: service.name,
      description: service.description,
      cost: service.cost,
      service_length: service.service_length,
      archived: true
    }
    fetch(`http://localhost:9292/services/${service.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(serviceData)
    })
      .then(() => setServices([...services.filter(services => services.id !== service.id)]))
      .then(() => alert("Service archived!"))
      .catch(err => alert(err.message))
  }

  return (
    <Stack gap={3}>
      <Navbar />
      <Stack gap={3}>
        <h2 class="center">Current Services</h2>
        {services.map((service) => (
          <div key={service.id} class="center">
            <li>
              <h6><strong>{service.name}</strong></h6>
              <p>{service.description}</p>
              <h6>Cost: ${service.cost}</h6>
              <h6>Service Length: {service.service_length} minutes</h6>
              <Button onClick={() => handleArchive(service)} size="sm" variant="danger">Archive Service</Button>
            </li>
          </div>
        ))}
      </Stack>
    </Stack>
  )
}

export default Services