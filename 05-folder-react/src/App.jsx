// import React from 'react'
// import Card from './components/card'
// const App = () => {
//   return (
//     <div>
      // <Card />
      
//       <div className='class'>
        
//         <h1>Sameer Kumar</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, vero!</p>
//       </div>

//       </div>
//   )
// }


// export default App


import React from 'react'
import Second from './game/gard'

const App = () => {
  return (
    <div className='parent'>
      <Second username='Odyssey' year={2026} img='https://images.unsplash.com/photo-1793948854325-c387ddc02a55?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'/>
      <Second username='Ramayan' year={2026} img='https://images.unsplash.com/photo-1783154955300-47047e0c44df?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'/>
      <Second username='Ramayan' year={2026} img='https://images.unsplash.com/photo-1793015099217-72891c301405?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'/>

    </div>
  )
}

export default App