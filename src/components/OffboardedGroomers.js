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

  return (
    <Stack gap={3}>
      <Navbar />
      <GroomerNav />
      <Stack gap={3}>
        <h2>Offboarded Groomers</h2>
        {offboardedGroomers.map((groomer) => (
          <div key={groomer.id}>
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