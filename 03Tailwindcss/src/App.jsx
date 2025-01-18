import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  
  let myObj={
    username:"hitesh",
    age:20

  }
  
  return (
    <>
      <h1 className='bg-green-400 p-10 rounded-xl'>Tailwind test</h1>
      <Card username="chaiaurcode" nname="Shruti" />
      <Card username="chaiorcode" nname="#hemu"/>
      
      
    </>
  )
}

export default App
