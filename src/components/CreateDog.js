import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import Navbar from './Navbar'
import DogNav from './DogNav'
import Form from 'react-bootstrap/Form'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'

function CreateDog() {
  const [name, setName] = useState("")
  const [breed, setBreed] = useState("")
  const [age, setAge] = useState("")
  const [photo_url, setPhoto_url] = useState("")
  
  const navigate = useNavigate()

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(r => r.json())
      .then(data => setPhoto_url(data.message))
      .catch(err => alert(err.message))
  },[])

  function handleSubmit(e) {
    e.preventDefault()

    const dog = {
      name: name,
      breed: breed,
      age: age,
      photo_url: photo_url,
      archived: false,
    }

    fetch("http://localhost:9292/create-dog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dog),
    })
    .then(() => {
      alert("Dog saved!")
      setName("")
      setBreed("")
      setAge("")
      setPhoto_url("")
      navigate(`/dogs`)
    })
  }

  return (
    <Stack gap={3}>
      <Navbar />
      <DogNav />
      <h2>Create a Dog Profile</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Dog's Name</Form.Label>
          <Form.Control required onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Enter the dog's name..."/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Dog's Breed</Form.Label>
          <Form.Control required onChange={(e) => setBreed(e.target.value)} value={breed} type="text" placeholder="Enter the dog's breed..."/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Dog's Age</Form.Label>
          <Form.Control required onChange={(e) => setAge(e.target.value)} value={age} type="text" placeholder="Enter the dog's age..."/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Dog's Photo</Form.Label>
          <Form.Control onChange={(e) => setPhoto_url(e.target.value)} value={photo_url} type="text" placeholder="Enter a URL to the dog's photo..."/>
          <Form.Text className="text-muted">
          If you don't provide a photo, the random photo above will be used.
        </Form.Text>
        </Form.Group>
      </Form>
      <Button onClick={handleSubmit} as="input" type="submit" value="Submit" />
    </Stack>
  )
}

export default CreateDog