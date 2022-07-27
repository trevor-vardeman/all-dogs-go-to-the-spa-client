import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import ServiceNav from './ServiceNav'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'

function CreateService() {
  return (
    <Stack gap={3}>
      <Navbar />
      <ServiceNav />
      <Stack gap={3}>
        
      </Stack>
    </Stack>
  )
}

export default CreateService