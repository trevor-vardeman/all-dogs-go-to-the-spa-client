import React from 'react'
import './index.css'
import ReactDOM from "react-dom/client"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import CreateAppointment from './components/CreateAppointment'
import UpcomingAppointments from './components/UpcomingAppointments'
import PastAppointments from './components/PastAppointments'
import Dogs from './components/Dogs'
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
        <Route path="/upcoming-appointments" element={<UpcomingAppointments />} />
        <Route path="/past-appointments" element={<PastAppointments />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/groomers" element={<Groomers />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)