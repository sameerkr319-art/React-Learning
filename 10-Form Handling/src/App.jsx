import React from 'react'

const App = () => {
  const handlesubmit = (e)=>{
    e.preventDefault()
    console.log("Form Submitted")
  }



  return (
    <div>
      <form onSubmit={function(elem){
          handlesubmit(elem)
        }}>
        <input type="text" placeholder='Enter your name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App