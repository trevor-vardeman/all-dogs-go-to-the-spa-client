import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import Navbar from './Navbar'
import GroomerNav from './GroomerNav'
import Form from 'react-bootstrap/Form'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'

function CreateGroomer() {
  const [name, setName] = useState("")
  const [onboardingDate, setOnboardingDate] = useState("")

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()

    const groomer = {
      name: name,
      onboarding_date: onboardingDate,
      offboarding_date: ""
    }

    fetch("http://localhost:9292/create-groomer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(groomer),
    })
    .then(() => {
      alert("Groomer saved!")
      setName("")
      setOnboardingDate("")
      navigate("/groomers")
    })
  }

  return (
    <Stack gap={3}>
      <Navbar />
      <GroomerNav />
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control required onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Enter the employee's name..."/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Onboarding Date:</Form.Label>
          <Form.Control onChange={(e) => setOnboardingDate(e.target.value)} type="date" size="sm" />
        </Form.Group>
      </Form>
      <Button onClick={handleSubmit} as="input" type="submit" value="Submit" />
    </Stack>
  )
}

export default CreateGroomer