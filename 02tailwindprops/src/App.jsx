
import './App.css'
import Card from './components/Card'

function App() {


  const myObj = {
    id:1,
    name:"shivam",
    message:"say hello"
  }


 
return  (<>

  <Card btnText='help' myObject= {myObj}/>
  <Card/>

</>)
  
}

export default App
