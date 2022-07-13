import { useState, useEffect } from 'react'
import Navbar from './Navbar'

function Groomers() {
  const [groomers, setGroomers] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/groomers")
      .then(r => r.json())
      .then(data => setGroomers(data))
      .catch(err => alert(err.message))
  },[])

  return (
    <div>
      <Navbar />
      <div>
        <h2>Groomers</h2>
        {groomers.map((groomer) => (
          <div key={groomer.id}>
            <h6><strong>{groomer.name}</strong></h6>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Groomers