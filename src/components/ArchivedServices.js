import { useState, useEffect } from 'react'
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
    <Stack gap={3} className="center">
      <div>
        <h1 className="font-color">Archived Services</h1>
        <p>Archived services cannot be selected when creating a new appointment.</p>
      </div>
      {archivedServices.map((service) => (
        <div key={service.id}>
          <li>
            <h6><strong>Name:</strong> {service.name}</h6>
            <h6><strong>Description:</strong> {service.description}</h6>
            <h6><strong>Cost:</strong> ${service.cost}</h6>
            <h6><strong>Service Length:</strong> {service.service_length} minutes</h6>
            <Button onClick={() => handleUnarchive(service)} size="sm" variant="danger">Unarchive Service</Button>
          </li>
        </div>
      ))}
    </Stack>  
    )
}

export default ArchivedServices