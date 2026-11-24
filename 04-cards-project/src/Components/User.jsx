import React from 'react'

const User = (props) => {
    console.log(props)
  return (
    <div style={{color:'whitesmoke'}}>
        <h1>Sameer {props.name}</h1>
    </div>
  )
}

export default User