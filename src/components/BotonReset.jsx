import React from 'react'
import reset from '../assets/reset.png'
import '../hojas-de-estilo/BotonReset.css'
import { PropTypes } from 'prop-types'

export const BotonReset = ({reiniciar}) => {
  return (
    <div className='btn-reset-container' data-testid='btnReset'>
        <img className='reset' src={reset} alt="img-reset" onClick={reiniciar}/>
    </div>
  )
}

BotonReset.propTypes = {
  reiniciar : PropTypes.func.isRequired
}
