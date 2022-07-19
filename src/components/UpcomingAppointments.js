import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import Stack from 'react-bootstrap/Stack'
import Navbar from './Navbar'
import AppointmentNav from './AppointmentNav'

function UpcomingAppointments(props) {
  const [upcomingAppointments, setUpcomingAppointments] = useState([])

  let navigate = useNavigate()

  useEffect(() => {
    fetch("http://localhost:9292/appointments")
      .then(r => r.json())
      .then(data => setUpcomingAppointments(data))
      .catch(err => alert(err.message))
  },[])

  function handleclick(apptId) {
    console.log(apptId)
    // navigate(`/appointments/${apptId}`)
  }

  return (
    <Stack gap={3}>
      <Navbar />
      <AppointmentNav />
      <Stack gap={3}>
        <h2>Upcoming Appointments</h2>
        {upcomingAppointments.map((appt) => (
          <div key={appt.id} onClick={() => handleclick(appt.id)}>
            <h1>{appt.id}</h1>
            <h6>Appointment date/time: </h6>
            <h6>Dog: {appt.dog_id}</h6>
            <h6>Groomer: {appt.groomer_id}</h6>
            <h6>Service: {appt.service_id}</h6>
            <h6>Length: </h6>
            <h6>Cost: </h6>
          </div>
          ))}
      </Stack>
    </Stack>
  )
}

export default UpcomingAppointments  