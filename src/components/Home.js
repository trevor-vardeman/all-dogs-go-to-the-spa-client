import Stack from 'react-bootstrap/Stack'

function Home() {
  return (
    <Stack gap={3} className="center">
      <div>
        <h1>Welcome to <span className="font-link font-color">All Dogs Go to the Spa!</span></h1>
        <p>With this app, you can manage upcoming appointments at your own doggie spa.</p>
        <p>Manage your appointments by using the dropdown above. Appointments can be created, edited, or deleted.</p>
        <p>In order to add a dog, groomer, or service to an appointment, they must first be created via their respective pages.</p>
        <p>If you no longer plan to use a dog, groomer, or service, you can archive each of them.</p>
      </div>
    </Stack>
  )
}

export default Home