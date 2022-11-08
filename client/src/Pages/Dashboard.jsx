import React from 'react'
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
const navigate = useNavigate()
  const handleNav =() =>{
    document.getElementById("nav").innerHTML="Hello World";
    return navigate('/home');
  }
  return (
    <div>
      <p id='nav'></p>
      <button onClick={handleNav}>Vlkadfjsb</button>
    </div>
  )
}

export default Dashboard