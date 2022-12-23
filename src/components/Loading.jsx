import React from 'react'
import Jerry from '../img/giphy.gif'

const Loading = () => {
  return (
    <div className='loading' >
       <img src={Jerry} alt="" />
        <h1>Cargando...</h1>
        <h2>cuida que Jerry no se lastime.</h2>
    </div>
  )
}

export default Loading