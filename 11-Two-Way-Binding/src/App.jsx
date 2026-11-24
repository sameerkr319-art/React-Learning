import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')


  const handlesubmit = (e)=>{
    e.preventDefault()
    console.log("Form Submitted")
    setTitle('')
  }



  return (
    <div>
      <form onSubmit={function(elem){
          handlesubmit(elem)
        }}>

        <input value={title} type="text" placeholder='Enter your name' 
          onChange={(e)=>{
            setTitle(e.target.value)
        }}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App