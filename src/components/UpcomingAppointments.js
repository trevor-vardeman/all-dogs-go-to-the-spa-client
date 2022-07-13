import { useState, useEffect } from 'react'
import Navbar from './Navbar'


function UpcomingAppointments() {
  const [upcomingAppointments, setUpcomingAppointments] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/upcoming-appointments")
      .then(r => r.json())
      .then(data => setUpcomingAppointments(data))
      .catch(err => alert(err.message))
  },[])

  return (
    <div>
      <Navbar />
      <div>
        {/* {!upcomingAppointments 
        ? {upcomingAppointments.map((appt) => (
            <h3 key={appt.id}>{appt}</h3>
          ))}
        : null} */}
        <h2>Upcoming Appointments</h2>
        {upcomingAppointments.map((appt) => (
          <div key={appt.id}>
            <h6>Appointment date/time: </h6>
            <h6>Dog: {appt.dog_id}</h6>
            <h6>Groomer: {appt.groomer_id}</h6>
            <h6>Service:{appt.service_id}</h6>
            <h6>Length: </h6>
            <h6>Cost: </h6>
          </div>
          ))}
      </div>
    </div>
  )
}

export default UpcomingAppointments  