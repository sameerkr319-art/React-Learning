import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)


  function Increasenum(){
    setNum(num+1)
    //Batch Update:
    //Batch Update:
    setNum( prev =>( prev + 1 ))
    setNum( prev =>( prev + 1 ))
    setNum( prev =>( prev + 1 ))
    
  }
  function Decreasenum(){
   setNum(num-1)
   setNum(prev=>({...prev,age:20}))
  }
  
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={Increasenum}>Increase</button>
      <button onClick={Decreasenum}>Decrease</button>

    </div>
  )
}

export default App