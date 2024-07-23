import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PaginaTotal from './components/PaginaTotal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <PaginaTotal/>
      </div>
    </>
  )
}

export default App
