
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'

const App = () => {
  const users = [
    {
      img:'https://plus.unsplash.com/premium_photo-1731355866971-42046925bb95?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' ,
      color:'#846E49',
      intro:'' ,
      tag:'Satisfied',
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661765873819-2dd94bd32016?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' ,
      color:'#492F26',
      intro:'' ,
      tag:'Underserved',
    },
    {
      img:'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' ,
      color:'#4E7382',
      intro:'' ,
      tag:'Underbanked',
    },
    {
      img:'https://images.unsplash.com/photo-1748785826535-302d607e3ddc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' ,
      color:'#AF7F66',
      intro:'' ,
      tag:'Independent',
    },
  ]
  return (
    <div>
      <Section1 users={users}/>
    </div>
  )
}
export default App 