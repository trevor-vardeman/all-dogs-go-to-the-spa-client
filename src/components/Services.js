import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Stack from 'react-bootstrap/Stack'

function Services() {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/services")
      .then(r => r.json())
      .then(data => setServices(data))
      .catch(err => alert(err.message))
  },[])

  return (
    <Stack gap={3}>
      <Navbar />
      <Stack gap={3}>
        <h2>Services</h2>
        {services.map((service) => (
          <div key={service.id}>
            <h6><strong>{service.name}</strong></h6>
            <h6>{service.description}</h6>
            <h6>Cost: ${service.cost}</h6>
            <h6>Service Length: {service.service_length} minutes</h6>
          </div>
        ))}
      </Stack>
    </Stack>
  )
}

export default Services