
import Greeting from './Components/Greeting';
import WelcomeMessage from './Components/MyFunctionComp';
import Counter from './Components/Counter';
import './styles/App.css';
import DisplayInput from './Components/DisplayInput';
import Electronics from './Components/Electronics';


function App() {
  return (
    <div className="App">
   
     <WelcomeMessage />
     <Greeting name='Arun'/>
     <Counter />
     <DisplayInput />
    <Electronics />
    </div>
  );
}

export default App;
