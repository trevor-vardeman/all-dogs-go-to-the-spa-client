import { useState, useEffect } from 'react'
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
    <Stack gap={3} className="center">
      <div>
        <h1 className="font-color">Offboarded Groomers</h1>
        <p>Offboarded groomers cannot be selected when creating a new appointment.</p>
      </div>
      {offboardedGroomers.map((groomer) => (
        <div key={groomer.id}>
          <li>
            <h6><strong>Name:</strong> {groomer.name}</h6>
            <h6><strong>Onboarding date:</strong> {groomer.onboarding_date}</h6>
            <h6><strong>Offboarding date:</strong> {groomer.offboarding_date}</h6>
          </li>
        </div>
      ))}
    </Stack>
  )
}

export default OffboardedGroomers