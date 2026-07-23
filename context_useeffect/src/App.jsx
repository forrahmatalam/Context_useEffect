import React from 'react'
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import { useContext } from 'react';
import { MyStore } from './context/MyContext';


const App = () => {
  console.log("App rendering....")
 
  let {count, setCount} = useContext(MyStore);
  

  return (
    <div>
     
     <h1>count - {count}</h1>
     <button onClick={()=>setCount(count+1)}>Increment</button>

      <Home/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App
