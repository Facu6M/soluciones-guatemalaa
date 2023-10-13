import React, { useState } from 'react'
import styles from "../styles/ArchiveUpload.css"
// XLSX
import { utils, writeFileXLSX } from "xlsx";
import axios from "axios";


const ArchiveUpload = () => {

    const [file,setFile] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const fd = new FormData()
        fd.append("file", file)
        console.log(fd)
        // console.log(fd)
        axios.post("http://localhost:400/clientes", fd)
}

const handleChange = (e) => {
  setFile(e.target.files[0])
}

console.log(file)

  return (
    <>
    <div className='form_container'>
    <h1>Subi tus archivos</h1>
      <form className="form" onSubmit={handleSubmit}>
      <div className='input-group'>
      <input     className="form_input" multiple  onChange={handleChange} type="file"/>
        </div>
    <button className='btn btn10' type='submit'>Enviar</button>
      </form>
    </div>
  </>
  )
}
export default ArchiveUpload
