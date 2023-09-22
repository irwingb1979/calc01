import React from 'react'

const ButtonClear = (props) => {
  return (
    <div className='boton-clear' onClick={props.handleClear}>
        { props.children }
    </div>
  )
}

export default ButtonClear