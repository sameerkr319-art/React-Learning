import React from 'react'

const App = () => {

  localStorage.setItem('car' , 'BMW')
  console.log(localStorage.getItem('car'))

  // const user = {
  //   username:"sameer",
  //   email:"alexu1@hotmail.com",
  //   class:"iitbombay0,"
  // }
  // localStorage.setItem('user',JSON.stringify(user))
  // const get = JSON.stringify(localStorage.getItem('user'))
  // console.log(get)


  return (
    <div>App</div>
  )
}

export default App