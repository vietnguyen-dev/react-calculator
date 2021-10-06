import {useState} from 'react'
import './App.css';
import ButtonPad
 from './components/ButtonPad';
const App = () => {
  const [equation, setEquation] = useState('')

  const settingEquation = newVal =>{
    let val = equation + newVal
    setEquation(val)
  }

  return (
    <div className="App">
      <h3>{equation}</h3>
     <ButtonPad addValue={settingEquation}/>
    </div>
  );
}

export default App;
