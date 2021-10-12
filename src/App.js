import './App.css';
import Screen from './components/Screen';
import ButtonPad from './components/ButtonPad';
import { useSelector} from 'react-redux';

const App = () => {
  const total = useSelector(state => state.total)
  const currentValue = useSelector(state => state.currentValue)

  return (
    <div className="App">
      <Screen currentValue={currentValue} total={total}/>
     <ButtonPad/>
    </div>
  );
}

export default App;
