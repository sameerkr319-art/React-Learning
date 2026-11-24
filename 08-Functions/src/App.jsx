import React from 'react'

const App = () => {
  function inputchanging(val){
    console.log("Sammer");
  }
  return (
    <div> 
      {/* <button onClick={btnclicked}>Click Me</button> */}
      <input onChange={function(elem)
        {inputchanging(elem.target.value)

        }} 
        type="Click ME" 
        placeholder='Enter the name'/>
    </div>
  )
}

export default App