import React from 'react'
import './index.css'
import './App.css'
import ReactDOM from "react-dom/client"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Appointment from './components/Appointment'
import EditAppointment from './components/EditAppointment'
import CreateAppointment from './components/CreateAppointment'
import UpcomingAppointments from './components/UpcomingAppointments'
import PastAppointments from './components/PastAppointments'
import Dogs from './components/Dogs'
import ArchivedDogs from './components/ArchivedDogs'
import CreateDog from './components/CreateDog'
import Groomers from './components/Groomers'
import CreateGroomer from './components/CreateGroomer'
import EditGroomer from './components/EditGroomer'
import OffboardedGroomers from './components/OffboardedGroomers'
import Services from './components/Services'
import CreateService from './components/CreateService'
import ArchivedServices from './components/ArchivedServices'
import App from './components/App'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create-appointment" element={<CreateAppointment />} />
        <Route path="/appointments" element={<UpcomingAppointments />} />
        <Route path="/appointments/:id" element={<Appointment />} />
        <Route path="/appointments/edit/:id" element={<EditAppointment />} />
        <Route path="/past-appointments" element={<PastAppointments />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/create-dog" element={<CreateDog />} />
        <Route path="/archived-dogs" element={<ArchivedDogs />} />
        <Route path="/groomers" element={<Groomers />} />
        <Route path="/create-groomer" element={<CreateGroomer />} />
        <Route path="/groomers/:id" element={<EditGroomer />} />
        <Route path="/offboarded-groomers" element={<OffboardedGroomers />} />
        <Route path="/services" element={<Services />} />
        <Route path="/create-service" element={<CreateService />} />
        <Route path="/archived-services" element={<ArchivedServices />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)