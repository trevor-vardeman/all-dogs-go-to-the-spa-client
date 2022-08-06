import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Stack from 'react-bootstrap/Stack'

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
      <Stack gap={3}>
        <h2>Offboarded Groomers</h2>
        {offboardedGroomers.map((groomer) => (
          <div key={groomer.id}>
            <h6><strong>{groomer.name}</strong></h6>
            <h6>Onboarding date: {groomer.onboarding_date}</h6>
            <h6>Offboarding date: {groomer.offboarding_date}</h6>
          </div>
        ))}
      </Stack>
    </Stack>
  )
}

export default OffboardedGroomers