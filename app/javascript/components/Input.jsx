import React, { useState } from "react"

function Input({ inputType }) {

  const [input, setInput] = useState("")

  const handleChange = (event) => {
    const {value, type, checked} = event.target
    type === "checkbox" ? setInput( prevInput => checked ) : setInput( prevInput => value )
  }

  const attributes = inputType === "checkbox" ? {checked: input === "" ? false : input} : {}

  return (
    <div>
      <h1>input type: {inputType}</h1>
      <input 
        type={inputType}
        {...attributes}
        value={input}
        onChange={handleChange} 
      />
      <h3>{input}</h3>
    </div>
  )
}

export default Input;
