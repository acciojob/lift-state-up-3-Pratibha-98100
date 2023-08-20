import React, { useState } from 'react'

function Model() {


  let [select, setselect] = useState("");

  function optn1(){
    setselect("Option 1")
  }


  function optn2(){
    setselect("Option 2")
  }


  return (
    <div className='parent'>
      
      <h1>Parent Component</h1>

      <div className='child1'>
        <h2>Child Component 1</h2>
        <button onClick={optn1}>Option 1</button>
      </div>


      <div className='child2'>
        <h2>Child Component 2</h2>
        <button onClick={optn2}>Option 2</button>
      </div>

      <p>Selected Option: {select}</p>
    </div>
  )
}

export default Model
