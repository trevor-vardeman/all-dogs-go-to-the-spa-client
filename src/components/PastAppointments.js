import { useState, useEffect } from 'react'
import Stack from 'react-bootstrap/Stack'

function PastAppointments() {
  const [pastAppointments, setPastAppointments] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/past-appointments")
      .then(r => r.json())
      .then(data => setPastAppointments(data))
      .catch(err => alert(err.message))
  },[])

  return (
    <Stack gap={3} className="center">
      <h2>Past Appointments</h2>
      {pastAppointments.map((appt) => (
        <div key={appt.id}>
          <li>
            <img src={appt.dog.photo_url} alt={`${appt.dog.name} the ${appt.dog.breed}`}/>
            <h6><strong>Appointment date/time:</strong> {appt.appt_datetime}</h6>
            <h6><strong>Dog:</strong> {appt.dog.name}</h6>
            <h6><strong>{appt.dog.name}'s Age:</strong> {appt.dog.age}</h6>
            <h6><strong>{appt.dog.name}'s Breed:</strong> {appt.dog.breed}</h6>
            <h6><strong>Groomer:</strong> {appt.groomer.name}</h6>
            <h6><strong>Service:</strong> {appt.service.name}</h6>
            <h6><strong>Length:</strong> {appt.service.service_length} minutes</h6>
            <h6><strong>Cost:</strong> ${appt.service.cost}</h6>
          </li>
        </div>
        ))}
    </Stack>
  )
}

export default PastAppointments