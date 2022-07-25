import React from 'react'
import './index.css'
import ReactDOM from "react-dom/client"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import AppointmentContainer from './components/AppointmentContainer'
import Appointment from './components/Appointment'
import EditAppointment from './components/EditAppointment'
import CreateAppointment from './components/CreateAppointment'
import UpcomingAppointments from './components/UpcomingAppointments'
import PastAppointments from './components/PastAppointments'
import Dogs from './components/Dogs'
import CreateDog from './components/CreateDog'
import Groomers from './components/Groomers'
import Services from './components/Services'
import App from './components/App'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create-appointment" element={<CreateAppointment />} />
        <Route path="/appointments" element={<AppointmentContainer />} />
        <Route path="/appointments/:id" element={<Appointment />} />
        <Route path="/appointments/edit/:id" element={<EditAppointment />} />
        <Route path="/upcoming-appointments" element={<UpcomingAppointments />} />
        <Route path="/past-appointments" element={<PastAppointments />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/create-dog" element={<CreateDog />} />
        <Route path="/groomers" element={<Groomers />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)