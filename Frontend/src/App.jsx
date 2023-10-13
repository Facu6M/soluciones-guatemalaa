import { useState } from 'react'
import './App.css'
// components
import Header from "./components/Header"
import ArchiveUpload from './components/archiveUpload'
import {Routes,Route} from "react-router-dom"
import Visualizacion from './components/Visualizacion'
import LineChart from './components/LineChart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<ArchiveUpload/>}/>
        <Route path='/Visualizacion' element={<Visualizacion/>}/>
        <Route path='/LineChart' element={<LineChart />}/>
        </Routes> 
      
      
    </>
  )
}

export default App
