import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Stack from 'react-bootstrap/Stack'

function Dogs() {
  const [dogs, setDogs] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/dogs")
      .then(r => r.json())
      .then(data => setDogs(data))
      .catch(err => alert(err.message))
  },[])

  return (
    <Stack gap={3}>
      <Navbar />
      <Stack gap={3}>
        <h2>Dogs</h2>
        {dogs.map((dog) => (
          <div key={dog.id}>
            <h6><strong>{dog.name}</strong></h6>
            <h6>Breed: {dog.breed}</h6>
            <h6>Age: {dog.age}</h6>
            <img style={{maxWidth: "300px", maxHeight: "300px"}} src={dog.photo_url} alt={`${dog.name} the ${dog.breed}`}/>
          </div>
        ))}
      </Stack>
    </Stack>
  )
}

export default Dogs