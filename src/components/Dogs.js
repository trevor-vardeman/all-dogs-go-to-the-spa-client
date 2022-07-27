import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import Navbar from './Navbar'
import DogNav from './DogNav'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'

function Dogs() {
  const [dogs, setDogs] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    fetch("http://localhost:9292/dogs")
      .then(r => r.json())
      .then(data => setDogs(data))
      .catch(err => alert(err.message))
  },[])

  function handleArchive(dog) {
    const dogData = {
      name: dog.name,
      breed: dog.breed,
      age: dog.age,
      photo_url: dog.photo_url,
      archived: true,
    }
    fetch(`http://localhost:9292/dogs/${dog.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dogData),
    })
      .then(() => setDogs([...dogs.filter(dogs => dogs.id !== dog.id)]))
      .then(() => alert(`${dog.name} archived!`))
      .catch(err => alert(err.message))
  } 

  return (
    <Stack gap={3}>
      <Navbar />
      <DogNav />
      <Stack gap={3}>
        <h2>Active Dogs</h2>
        {dogs.map((dog) => (
          <div key={dog.id}>
            <Button onClick={() => handleArchive(dog)} size="sm" variant="danger">Archive Dog</Button>
            <h6><strong>{dog.name}</strong></h6>
            <h6>Breed: {dog.breed}</h6>
            <h6>Age: {dog.age}</h6>
            <img style={{maxWidth: "200px", maxHeight: "200px"}} src={dog.photo_url} alt={`${dog.name} the ${dog.breed}`}/>
          </div>
        ))}
      </Stack>
    </Stack>
  )
}

export default Dogs