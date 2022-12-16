
import './App.css';
import  { useState } from 'react';
function App() {
  const [buttonColor, setbuttonColor] = useState('red');
  const [ifchecked, setifchecked] = useState(0);
  const newButtonColor = buttonColor === 'red'?'blue':'red';
  return (
    <div className="App">
  <button 
  disabled={ifchecked}
  onClick={()=>setbuttonColor(newButtonColor)}

  style={{backgroundColor:buttonColor}}>Change to {newButtonColor}</button>
  <input  type="checkbox" defaultChecked = {ifchecked} onChange = {()=>setifchecked(!ifchecked)}/>
 </div>
  );
}

export default App;
