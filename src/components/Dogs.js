import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'

function Dogs() {
  const [dogs, setDogs] = useState([])

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
      <Stack gap={3}>
        <h2 class="center">Active Dogs</h2>
        {dogs.map((dog) => (
          <div key={dog.id} class="center">
            <ul>
              <li>
                <img src={dog.photo_url} alt={`${dog.name} the ${dog.breed}`}/>
                <h6><strong>{dog.name}</strong></h6>
                <h6>Breed: {dog.breed}</h6>
                <h6>Age: {dog.age}</h6>
                <Button onClick={() => handleArchive(dog)} size="sm" variant="danger">Archive Dog</Button>
              </li>
            </ul>
          </div>
        ))}
      </Stack>
    </Stack>
  )
}

export default Dogs