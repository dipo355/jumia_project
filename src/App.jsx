// import { useState } from "react"
// import Form from "./components/form"
import Miniludo from "./components/Miniludo"
const App = () => {
  // let myName = "dipo"
  // const [myAge, setmyAge] = useState(1)


  // const increaseAge = () => {
  //    setmyAge(myAge+1)
  //    console.log(myAge);
  // }

  return (
    <div>
    {/* <Form/> */}
    <Miniludo/>
    {/* <h1>{myName} is a good boy</h1>
    <h6>{Math.random()} is a dynamic number betweeen zero and one</h6>
    <h3>I am {myAge} years old</h3>
    <button className="btn btn-info" onClick={() => {setmyAge(myAge+1)} }>Increase Age</button> */}
    </div>
  )
}

export default App

