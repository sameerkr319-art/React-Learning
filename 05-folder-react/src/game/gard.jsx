import React from 'react'

const Gard = (a) => {
  console.log(a )
  return (
  <div className='child'>
    <img src={a.img} alt="" />
    <h1>{a.username},{a.year}</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    <button>View Profile</button>
  </div>

    
  )
}

export default Gard