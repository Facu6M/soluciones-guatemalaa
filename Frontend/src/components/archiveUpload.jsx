import React from 'react'
import styles from "../styles/ArchiveUpload.css"

const ArchiveUpload = () => {


    const handleSubmit = (e) => {
        e.preventDefault();
       console.log(e.target.value)
    }

  return (
    <>
    <div className='form_container'>
    <h1>Subi tus archivos</h1>
      <form className="form">
      <div className='input-group'>
      <input     className="form_input" onClick={handleSubmit} type="file"/>
        </div>
    <button className='btn btn10' onClick={handleSubmit}>Enviar</button>
      </form>
    </div>
  </>
  )
}
export default ArchiveUpload
