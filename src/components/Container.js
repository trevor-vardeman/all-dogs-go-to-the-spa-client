import CreateAppointment from './CreateAppointment'
import UpcomingAppointments from './UpcomingAppointments'
import PastAppointments from './PastAppointments'
import Dogs from './Dogs'
import Groomers from './Groomers'
import Services from './Services'
import Stack from 'react-bootstrap/Stack'

function Container() {
  return (
    <Stack gap={3} direction="horizontal">
      <CreateAppointment />
      <UpcomingAppointments />
      <PastAppointments />
      <Dogs />
      <Groomers />
      <Services />
    </Stack>
  )
}

export default Container