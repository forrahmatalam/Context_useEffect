import React, { useEffect } from 'react'
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
// import { useContext } from 'react';
// import { MyStore } from './context/MyContext';
import { useState } from 'react';
import axios from 'axios';

const App = () => {
 
 async function getData() {
    let res =await axios.get("https://fakestoreapi.com/products")
console.log(res) 
 }

 getData();
  // let {count, setCount} = useContext(MyStore);
   const [count, setCount] = useState(0);

   useEffect(() => {
     console.log("App rendering....")
 
   }, [count])

  return (
   
    <div>
     
     <h1>count - {count} </h1>
     <button onClick={()=>setCount(count+1)}>Increment</button>

      <Home/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App
