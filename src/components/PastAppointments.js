import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import AppointmentNav from './AppointmentNav'
import Stack from 'react-bootstrap/Stack'

function PastAppointments() {
  const [pastAppointments, setPastAppointments] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/past-appointments")
      .then(r => r.json())
      .then(data => {
        console.log(data)
        setPastAppointments(data)
      })
      .catch(err => alert(err.message))
  },[])

  return (
    <Stack gap={3}>
      <Navbar />
      <AppointmentNav />
      <Stack gap={3}>
        <h2>Past Appointments</h2>
        {pastAppointments.map((appt) => (
          <div key={appt.id}>
            <img style={{maxWidth: "300px", maxHeight: "300px"}} src={appt.dog.photo_url} alt={`${appt.dog.name} the ${appt.dog.breed}`}/>
            <h6>Appointment date/time: {appt.appt_datetime}</h6>
            <h6>Dog: {appt.dog.name}</h6>
            <h6>{appt.dog.name}'s Age: {appt.dog.age}</h6>
            <h6>{appt.dog.name}'s Breed: {appt.dog.breed}</h6>
            <h6>Groomer: {appt.groomer.name}</h6>
            <h6>Service: {appt.service.name}</h6>
            <h6>Length: {appt.service.service_length} minutes</h6>
            <h6>Cost: ${appt.service.cost}</h6>
          </div>
          ))}
      </Stack>
    </Stack>
  )
}

export default PastAppointments