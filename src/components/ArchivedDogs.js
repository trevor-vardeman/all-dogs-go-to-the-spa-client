import { useState, useEffect } from 'react'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'

function ArchivedDogs() {
  const [archivedDogs, setArchivedDogs] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/archived-dogs")
      .then(r => r.json())
      .then(data => setArchivedDogs(data))
      .catch(err => alert(err.message))
  },[])

  function handleUnarchive(dog) {
    const dogData = {
      name: dog.name,
      breed: dog.breed,
      age: dog.age,
      photo_url: dog.photo_url,
      archived: false,
    }
    fetch(`http://localhost:9292/dogs/${dog.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dogData),
    })
      .then(() => setArchivedDogs([...archivedDogs.filter(dogs => dogs.id !== dog.id)]))
      .then(() => alert(`${dog.name} unarchived!`))
      .catch(err => alert(err.message))
  } 

  return (
    <Stack gap={3} className="center">
      <div>
        <h1 className="font-color">Archived Dogs</h1>
        <p>Archived dogs cannot be selected when creating a new appointment.</p>
      </div>
      {archivedDogs.map((dog) => (
        <div key={dog.id}>
          <ul>
            <li>
              <img src={dog.photo_url} alt={`${dog.name} the ${dog.breed}`}/>
              <h6><strong>Name:</strong> {dog.name}</h6>
              <h6><strong>Breed:</strong> {dog.breed}</h6>
              <h6><strong>Age:</strong> {dog.age}</h6>
              <Button onClick={() => handleUnarchive(dog)} size="sm" variant="danger">Unarchive Dog</Button>
            </li>
          </ul>
        </div>
      ))}
    </Stack>
  )
}

export default ArchivedDogs