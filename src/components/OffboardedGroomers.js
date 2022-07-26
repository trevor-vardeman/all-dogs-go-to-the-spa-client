import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import GroomerNav from './GroomerNav'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'

function OffboardedGroomers() {
  const [offboardedGroomers, setOffboardedGroomers] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/offboarded-groomers")
    .then(r => r.json())
    .then(data => setOffboardedGroomers(data))
    .catch(err => alert(err.message))
  },[])

  function handleEdit(id) {
    console.log(id)
  }

  return (
    <Stack gap={3}>
      <Navbar />
      <GroomerNav />
      <Stack gap={3}>
        <h2>Offboarded Groomers</h2>
        {offboardedGroomers.map((groomer) => (
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

export default OffboardedGroomers