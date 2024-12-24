import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [smth, setSmth] = useState('');

  useEffect(() => {
    fetch('/api/')
    .then(response => response.json())
    .then(data => setSmth(data.name) )
    .catch(error => console.error('Error:', error));
  },[])

  return (
    <>
      Hello my name is {smth}
    </>
  )
}

export default App
