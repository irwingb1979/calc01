import React from 'react'

const Button = (props) => {
    const isOperator = (value) => {
        return isNaN(value) && (value !== '.') && (value !== '=');
    }

  return (
    <div
     className={`button-content ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
     onClick={() => props.handleClic(props.children)}
    >
        {props.children}
    </div>
  )
}

export default Button