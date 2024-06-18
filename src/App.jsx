import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [notcount, setNotCount] = useState()

   const  addValue = () => {
   setCount(prevCount => (prevCount < 5 ? prevCount + 1 : prevCount));
   console.log("added the numbers ");
   }

   const  removeValue = () => {
    setCount(prevnotcount => ( prevnotcount> 0 ?prevnotcount - 1 : prevnotcount));
    console.log("one number removed!");
   }
  

  return (
    <><div className='box'>
        <h1 className='header'> COUNTER IN REACT </h1>
          <div className='buttons'>
                <button className='button1' onClick={addValue}>Add  Numbers  { count}</button>

                <button className='button2' onClick={removeValue}> Remove Numbers {notcount}</button>
         </div>
      <br />
      <br />
      <h2 className='last'> Final Count : { count}</h2>
      </div>
    </>
  )
}

export default App
