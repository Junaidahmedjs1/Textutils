import { useState } from "react";
import "./App.css";
function App() {

  const [count, setCount] = useState("");

  const cls = () => {
    setCount(""); 
  };

  return (
    <>
      <div>
        <h1>Textutlis</h1>
        <textarea
          onChange={(e) => setCount(e.target.value)}
          value={count}
        ></textarea>
        <p>Total Alphabets = <b>{count.length}</b></p>

        <div>
          <button onClick={()=> setCount(count.toLocaleUpperCase())}>UPPERCASE</button>
          <button onClick={()=> setCount(count.toLocaleLowerCase())}>LOWERCASE</button>
          <button onClick={()=> setCount(count.replaceAll(' ', ''))}>REMOVE SPACE</button>
          <button onClick={cls}>CLEAR TEXT</button>
        </div>
      
    </div>
    
    </>
  )
}

export default App