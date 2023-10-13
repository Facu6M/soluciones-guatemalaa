import { useState } from 'react'
import './App.css'
// components
import Header from "./components/Header"
import ArchiveUpload from './components/archiveUpload'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
  <ArchiveUpload/>
    </>
  )
}

export default App
