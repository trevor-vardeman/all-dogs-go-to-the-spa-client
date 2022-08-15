import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Appointment from './Appointment'
import EditAppointment from './EditAppointment'
import CreateAppointment from './CreateAppointment'
import UpcomingAppointments from './UpcomingAppointments'
import PastAppointments from './PastAppointments'
import Dogs from './Dogs'
import ArchivedDogs from './ArchivedDogs'
import CreateDog from './CreateDog'
import Groomers from './Groomers'
import CreateGroomer from './CreateGroomer'
import EditGroomer from './EditGroomer'
import OffboardedGroomers from './OffboardedGroomers'
import Services from './Services'
import CreateService from './CreateService'
import ArchivedServices from './ArchivedServices'
import Home from './Home'
import Navbar from './Navbar'
import NoMatch from './NoMatch'

function App() {
  return (
    <div>
      <Navbar /><br></br>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-appointment" element={<CreateAppointment />} />
        <Route path="/appointments" element={<UpcomingAppointments />} />
        <Route path="/appointments/:id" element={<Appointment />} />
        <Route path="/appointments/:id/edit" element={<EditAppointment />} />
        <Route path="/past-appointments" element={<PastAppointments />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/create-dog" element={<CreateDog />} />
        <Route path="/archived-dogs" element={<ArchivedDogs />} />
        <Route path="/groomers" element={<Groomers />} />
        <Route path="/create-groomer" element={<CreateGroomer />} />
        <Route path="/groomers/:id/edit" element={<EditGroomer />} />
        <Route path="/offboarded-groomers" element={<OffboardedGroomers />} />
        <Route path="/services" element={<Services />} />
        <Route path="/create-service" element={<CreateService />} />
        <Route path="/archived-services" element={<ArchivedServices />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  )
}

export default App