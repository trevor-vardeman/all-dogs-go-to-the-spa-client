import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import Navbar from './Navbar'
import DogNav from './DogNav'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'

function Dogs() {
  const [dogs, setDogs] = useState([])

  let navigate = useNavigate()

  useEffect(() => {
    fetch("http://localhost:9292/dogs")
      .then(r => r.json())
      .then(data => setDogs(data))
      .catch(err => alert(err.message))
  },[])

  function handleclick() {
    navigate(`/create-dog`)
  }

  function handleDelete(id) {
    fetch(`http://localhost:9292/dogs/${id}`, {
      method: "DELETE",
    })
      .then(() => setDogs([...dogs.filter(dog => dog.id !== id)]))
      .then(() => alert("Dog deleted!"))
      .catch(err => alert(err))
  } 

  return (
    <Stack gap={3}>
      <Navbar />
      <DogNav />
      <Stack gap={3}>
        <h2>Dogs</h2>
        <Button onClick={handleclick} style={{width: "fit-content"}}>Create a Dog Profile</Button>
        {dogs.map((dog) => (
          <div key={dog.id}>
            <Button onClick={() => handleDelete(dog.id)} size="sm" variant="danger">Delete Dog</Button>
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