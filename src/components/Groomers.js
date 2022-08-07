import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import Navbar from './Navbar'
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
    navigate(`/groomers/${id}`)
  }

  return (
    <Stack gap={3}>
      <Navbar />
      <Stack gap={3}>
        <h2 class="center">Current Groomers</h2>
        {groomers.map((groomer) => (
          <div key={groomer.id} class="center">
            <li>
              <h3><strong>{groomer.name}</strong></h3>
              <h6><strong>Onboarding date:</strong> {groomer.onboarding_date}</h6>
              <Button onClick={() => handleEdit(groomer.id)} size="sm" variant="danger">Edit</Button>
            </li>
          </div>
        ))}
      </Stack>
    </Stack>
  )
}

export default Groomers