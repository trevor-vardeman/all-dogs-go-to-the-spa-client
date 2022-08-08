import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

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
  },[id])

  function handleSubmit(e) {
    e.preventDefault()
    const groomerData = {
      name: name,
      onboarding_date: onboardingDate,
      offboarding_date: offboardingDate
    }
    fetch(`http://localhost:9292/groomers/edit/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(groomerData)
    })
    .then(() => {
      setGroomer([])
      setName("")
      setOnboardingDate("")
      setOffboardingDate("")
      navigate("/groomers")
    })
    .catch(err => alert(err.message))
  }

  return (
    <Stack gap={3} className="center">
      <h1 className="font-color">Edit Groomer</h1>
      {groomer ?
        <div key={groomer.id}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label><strong>Name</strong></Form.Label>
              <Form.Control required onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Enter the employee's name..."/>
            </Form.Group>
            <Form.Group className="mb-3">
            <h6><strong>Current onboarding date:</strong> {onboardingDate}</h6>
              <Form.Label><strong>New onboarding date:</strong></Form.Label>
              <Form.Control onChange={(e) => setOnboardingDate(e.target.value)} type="date" size="sm" />
            </Form.Group>
            <Form.Group className="mb-3">
              <h6><strong>Current offboarding date:</strong> {offboardingDate}</h6>
              <Form.Label><strong>New offboarding date:</strong></Form.Label>
              <Form.Control onChange={(e) => setOffboardingDate(e.target.value)} type="date" size="sm" />
            </Form.Group>
          </Form>
          <Button onClick={handleSubmit} as="input" type="submit" value="Submit" />
        </div>
      : null}
    </Stack>
  )
}

export default EditGroomer