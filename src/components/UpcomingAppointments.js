import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import Stack from 'react-bootstrap/Stack'
import Navbar from './Navbar'
import AppointmentNav from './AppointmentNav'

function UpcomingAppointments() {
  const [upcomingAppointments, setUpcomingAppointments] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    fetch("http://localhost:9292/appointments")
      .then(r => r.json())
      .then(data => setUpcomingAppointments(data))
      .catch(err => alert(err.message))
  },[])

  function handleclick(apptId) {
    navigate(`/appointments/${apptId}`)
  }

  return (
    <Stack gap={3}>
      <Navbar />
      <AppointmentNav />
      <Stack gap={3}>
        <h2>Upcoming Appointments</h2>
        {upcomingAppointments.map((appt) => (
          <div key={appt.id} onClick={() => handleclick(appt.id)}>
            <img style={{maxWidth: "200px", maxHeight: "200px"}} src={appt.dog.photo_url} alt={`${appt.dog.name} the ${appt.dog.breed}`}/>
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

export default UpcomingAppointments  