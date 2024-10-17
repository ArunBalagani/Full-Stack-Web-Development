import "./App.css";
import  ClassBased  from "./Component/ClassBased";
import  FunctionBased  from "./Component/FunctionBased";


function App() {
  return (

    <div className="App">
      Welcome to React js classes
      <ClassBased />
      <FunctionBased/>
    </div>
    
  );
}

export default App;