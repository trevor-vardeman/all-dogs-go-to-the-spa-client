import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import ServiceNav from './ServiceNav'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'

function ArchivedServices() {
  const [archivedServices, setArchivedServices] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/archived-services")
      .then(r => r.json())
      .then(data => setArchivedServices(data))
      .catch(err => alert(err.message))
  },[])

  function handleUnarchive(service) {
    fetch(`http://localhost:9292/services/${service.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({archived: false})
    })
      .then(() => setArchivedServices([...archivedServices.filter(services => services.id !== service.id)]))
      .then(() => alert(`${service.name} unarchived!`))
      .catch(err => alert(err.message))
  }

  return (
    <Stack gap={3}>
      <Navbar />
      <ServiceNav />
      <Stack gap={3}>
        <h2>Archived Services</h2>
        {archivedServices.map((service) => (
          <div key={service.id}>
            <Button onClick={() => handleUnarchive(service)} size="sm" variant="danger">Unarchive Service</Button>
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

export default ArchivedServices