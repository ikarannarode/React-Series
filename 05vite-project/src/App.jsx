import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(15)
  function Addcount() {
    if (count < 30) setCount(count + 1);

  }
  function Removecount() {


    if (count > 1) setCount(count - 1);
  }

  return (
    <>
      <h1>Hello Karan {count}</h1>
      <h3>Count :{count}</h3>
      <button onClick={Addcount}>Increase {count}</button>&nbsp;
      <button onClick={Removecount}>Decrease {count}</button>
      <p>{count}</p>
    </>
  )
}

export default App
