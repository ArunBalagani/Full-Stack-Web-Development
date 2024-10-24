import "./App.css";
// import  ClassBased  from "./Component/ClassBased.js";
// import  FunctionBased  from "./Component/FunctionBased.js";

// import StateManagement from "./Component/Hooks/StateManagement.js";
// import Groceries from "./Component/Inventory Dhashboard/Groceries.js";
// import ListItem from "./Component/Inventory Dhashboard/ListItem.js";
// import TodoApp from "./Component/inputTextDisplay";
import Electronics from './Component/InventoryDhashboard/Electronics.js'


function App() {

  return(
    <div>
    <div className='nav-bar'>
      <div className='logo'>
        <img src="https://logowik.com/content/uploads/images/dmart-avenue-supermarts4302.jpg" alt=""/>
      </div>
      <div className="nav-link">Home</div>
      <div className="nav-link">Home</div>
      <div className="nav-link">Home</div>
      <div className="nav-link">Home</div>

    </div>
    <Electronics/>
</div>
  )
  // return (
  //   <div>
  //     {/* <StateManagement /> */}
  //     {/* <Groceries /> */}
  //     {/* <ListItem/> */}
  //     {/* <TodoApp /> */}
  //   </div>
  // );
  // let showComponent = false;
  // if(showComponent){
  //   console.log("Class")
  // return  <ClassBased />
  // }
  // else{
  //   console.log("function")
  // return  <FunctionBased/>
  // }

  // true ? "Pass" : "Fail"
  // return showComponent ? <ClassBased /> : <FunctionBased/>

  // return (
  //   <div className="App">
  //     Welcome to React js classes
  //     <ClassBased />
  //     <FunctionBased/>
  //   </div>
  // );
}

export default App;