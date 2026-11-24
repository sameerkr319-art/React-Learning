// Calling API by fetch and AXIOS(npm i axios)
import axios from "axios"
import { useState } from 'react'


const App = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    
    const response = await axios.get('https://picsum.photos/v2/list')

    setData(response.data)
    
  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem,idx){

          return <h3>Hello, {elem.author} key={idx}{idx}</h3>
        })}
      </div>
    </div>
  )

  // const getData = async ()=>{
  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  //   const data = await response.json()
  //   console.log(data)
  // }

  // async function getData(){
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  //   console.log(response);
  // }


  // Calling API By Axios: 
    // const getData = async ()=>{
    //   const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    //   console.log(response.data)
    // }

  return (
    <div>
      <button onClick={getData}>Click Me</button>
    </div>
  )
}

export default App
