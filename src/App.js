
import './App.css';
import  { useState } from 'react';

export function replaceCamelWithSpaces(colorName){
return colorName.replace(/\B([A-Z])\B/g, ' $1q')
}
function App() {
  const [buttonColor, setbuttonColor] = useState('red');
  const [ifchecked, setifchecked] = useState(0);
  const newButtonColor = buttonColor === 'red'?'blue':'red';
  return (
    <div className="App">
  <button 
  disabled={ifchecked}
  onClick={()=>setbuttonColor(newButtonColor)}
 style={{backgroundColor:ifchecked?"gray":buttonColor}}>Change to {newButtonColor}</button>
  <input  
  type="checkbox"
  id="disable-button-checkbox"
   defaultChecked = {ifchecked} 
   onChange = {()=>setifchecked(!ifchecked)}/>
   <label htmlFor="disable-button-checkbox">Disable button</label>
 </div>
  );
}

export default App;
