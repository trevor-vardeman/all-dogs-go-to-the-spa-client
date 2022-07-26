import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Navbar from './Navbar'
import GroomerNav from './GroomerNav'

function EditGroomer() {
  const [groomer, setGroomer] = useState([])
  const [name, setName] = useState("")
  const [onboardingDate, setOnboardingDate] = useState("")
  const [offboardingDate, setOffboardingDate] = useState("")

  const navigate = useNavigate()
  const {id} = useParams()

  useEffect(() => {
    fetch(`http://localhost:9292/groomers/${id}`)
      .then(r => r.json())
      .then(data => {
        setGroomer(data)
        setName(data.name)
        setOnboardingDate(data.onboarding_date)
        setOffboardingDate(data.offboarding_date)
      })
      .catch(err => alert(err.message))
  },[])

  function handleSubmit(e) {
    e.preventDefault()
    const groomerData = {
      name: name,
      onboarding_date: onboardingDate,
      offboarding_date: offboardingDate
    }
    fetch(`http://localhost:9292/groomers/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(groomerData)
    })
    .catch(err => alert(err.message))
  }

  return (
    <Stack gap={3}>
      <Navbar />
      <GroomerNav />
        {groomer ?
          <div key={groomer.id}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control required onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Enter the employee's name..."/>
              </Form.Group>
              <Form.Group className="mb-3">
              <p>Current onboarding date/time: {onboardingDate}</p>
                <Form.Label>New onboarding date/time:</Form.Label>
                <Form.Control onChange={(e) => setOnboardingDate(e.target.value)} type="datetime-local" size="sm" />
              </Form.Group>
              <Form.Group className="mb-3">
                <p>Current offboarding date/time: {offboardingDate}</p>
                <Form.Label>New offboarding date/time:</Form.Label>
                <Form.Control onChange={(e) => setOffboardingDate(e.target.value)} type="datetime-local" size="sm" />
              </Form.Group>
            </Form>
            <Button onClick={handleSubmit} as="input" type="submit" value="Submit" />
          </div>
        : null}
    </Stack>
  )
}

export default EditGroomer