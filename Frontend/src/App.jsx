import { useState } from 'react'
import './App.css'
// components
import Header from "./components/Header"
import ArchiveUpload from './components/archiveUpload'
import {Routes,Route} from "react-router-dom"
import Visualizacion from './components/Visualizacion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<ArchiveUpload/>}/>
        <Route path='/Visualizacion' element={<Visualizacion/>}/>
        </Routes> 
      
      
    </>
  )
}

export default App
