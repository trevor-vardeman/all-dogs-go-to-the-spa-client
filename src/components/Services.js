import { useState, useEffect } from 'react'
import Navbar from './Navbar'

function Services() {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/services")
      .then(r => r.json())
      .then(data => setServices(data))
      .catch(err => alert(err.message))
  },[])

  return (
    <div>
      <Navbar />
      <div>
        <h2>Services</h2>
        {services.map((service) => (
          <div key={service.id}>
            <h6><strong>{service.name}</strong></h6>
            <h6>{service.description}</h6>
            <h6>Cost: ${service.cost}</h6>
            <h6>Service Length: {service.service_length} minutes</h6>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services