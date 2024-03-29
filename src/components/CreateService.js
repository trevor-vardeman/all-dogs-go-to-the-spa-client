import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import Stack from 'react-bootstrap/Stack'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function CreateService() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [cost, setCost] = useState("")
  const [serviceLength, setServiceLength] = useState("")

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (!name || !description || !cost || !serviceLength) {
      alert("Please fill out the entire form.")
    } else {
      const service = {
        name: name,
        description: description,
        cost: cost,
        service_length: serviceLength,
        archived: false
      }
      fetch("http://localhost:9292/create-service", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(service),
      })
      .then(() => {
        alert("Service saved!")
        setName("")
        setDescription("")
        setCost("")
        setServiceLength("")
        navigate("/services")
      })
    }
  }

  return (
    <Stack gap={3} className="center">
      <h1 className="font-color">Create a Service</h1>
      <div>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label><strong>Name</strong></Form.Label>
            <Form.Control onChange={(e) => setName(e.target.value)} value={name} type="text" size="sm" placeholder="Name of the service..."/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label><strong>Description</strong></Form.Label>
            <Form.Control onChange={(e) => setDescription(e.target.value)} value={description} type="text" size="sm" placeholder="Describe the service..."/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label><strong>Cost</strong></Form.Label>
            <Form.Control onChange={(e) => setCost(e.target.value)} value={cost} type="number" size="sm" placeholder="Cost of the service..."/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label><strong>Service Length (Minutes)</strong></Form.Label>
            <Form.Control onChange={(e) => setServiceLength(e.target.value)} value={serviceLength} type="number" size="sm" placeholder="Length of the service..."/>
          </Form.Group>
        </Form>
        <Button onClick={handleSubmit} as="input" type="submit" value="Submit" />
      </div>
    </Stack>
  )
}

export default CreateService