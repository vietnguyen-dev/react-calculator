import {useState} from 'react'
import './App.css';
import Screen from './components/Screen';
import ButtonPad from './components/ButtonPad';


const App = () => {
  const [equation, setEquation] = useState('')
  const [total, setTotal] = useState(0)

  const settingEquation = newVal =>{
    let val = equation + newVal
    setEquation(val)
  }

  const clearEquation = () => setEquation("")

  const deleteChar = () => {
    let delString = equation.substring(0, equation.length - 1);
    setEquation(delString)
  }

  return (
    <div className="App">
      <Screen equation={equation} total={total}/>
     <ButtonPad addValue={settingEquation}/>
    </div>
  );
}

export default App;
