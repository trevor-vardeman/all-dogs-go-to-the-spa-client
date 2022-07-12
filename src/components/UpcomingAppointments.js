import { useEffect } from 'react'
import Navbar from './Navbar'


function UpcomingAppointments() {
  useEffect(() => {
    fetch("http://localhost:9292/upcoming-appointments")
      .then(r => r.json())
      .then(data => console.log(data))
      .catch(err => console.error(err))
  },[])

  return (
    <div>
      <Navbar />
      <h1>Upcoming Appointments</h1>
    </div>
  )
}

export default UpcomingAppointments  