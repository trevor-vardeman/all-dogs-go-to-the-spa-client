import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'

function Groomers() {
  const [groomers, setGroomers] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/groomers")
      .then(r => r.json())
      .then(data => setGroomers(data))
      .catch(err => alert(err.message))
  },[])

  function handleEdit(id) {
    console.log(id)
  }

  return (
    <Stack gap={3}>
      <Navbar />
      <Stack gap={3}>
        <h2>Groomers</h2>
        {groomers.map((groomer) => (
          <div key={groomer.id}>
            <Button onClick={() => handleEdit(groomer.id)} size="sm" variant="danger">Edit</Button>
            <h6><strong>{groomer.name}</strong></h6>
            <h6>Onboarding date: {groomer.created_at}</h6>
            <h6>Offboarding date: {groomer.offboarding_date}</h6>
          </div>
        ))}
      </Stack>
    </Stack>
  )
}

export default Groomers