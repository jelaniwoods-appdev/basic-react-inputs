import React, { useState } from "react"

function Input({ inputType }) {

  const [input, setInput] = useState("")

  const handleChange = (event) => {
    setInput(prevInput => event.target.value)
  }

  return (
    <div>
      <h1>input type: {inputType}</h1>
      <input 
        type={inputType}
        value={input} 
        onChange={handleChange} 
      />
      <h3>{input}</h3>
    </div>
  )
}

export default Input;
