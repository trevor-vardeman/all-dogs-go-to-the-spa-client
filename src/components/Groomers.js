import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'

function Groomers() {
  const [groomers, setGroomers] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    fetch("http://localhost:9292/groomers")
      .then(r => r.json())
      .then(data => setGroomers(data))
      .catch(err => alert(err.message))
  },[])

  function handleEdit(id) {
    navigate(`/groomers/edit/${id}`)
  }

  return (
    <Stack gap={3} className="center">
      <div>
        <h2>Current Groomers</h2>
        <p>Active groomer profiles can be selected when creating a new appointment.</p>
      </div>
      {groomers.map((groomer) => (
        <div key={groomer.id}>
          <li>
            <h3><strong>{groomer.name}</strong></h3>
            <h6><strong>Onboarding date:</strong> {groomer.onboarding_date}</h6>
            <Button onClick={() => handleEdit(groomer.id)} size="sm" variant="danger">Edit</Button>
          </li>
        </div>
      ))}
    </Stack>
  )
}

export default Groomers