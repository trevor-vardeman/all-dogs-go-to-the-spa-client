import { useState, useEffect } from 'react'
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
    <Stack gap={3} className="center">
      <div>
        <h1 className="font-color">Current Services</h1>
        <p>Current services can be selected when creating a new appointment.</p>
      </div>
      {services.map((service) => (
        <div key={service.id}>
          <li>
            <h6><strong>Name:</strong> {service.name}</h6>
            <h6><strong>Description:</strong> {service.description}</h6>
            <h6><strong>Cost:</strong> ${service.cost}</h6>
            <h6><strong>Service Length:</strong> {service.service_length} minutes</h6>
            <Button onClick={() => handleArchive(service)} size="sm" variant="danger">Archive Service</Button>
          </li>
        </div>
      ))}
    </Stack>
  )
}

export default Services