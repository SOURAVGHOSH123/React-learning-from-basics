import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let newObj = {
    username: "sourav",
    age: 34,
    roll: "MCA20242"
  }
  let newArr = [12, 34, 56]

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tellwind Learning</h1>
     {/* <Card class="sourav" sourav={{title:"hello"}} />
     <Card class="siksja" name={newObj} /> */}
     <Card username="sourav" btnText="Click Me" />
     <Card username="soumaya"  />
    </>
  )
}

export default App
