// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'
function App() {

  const [newStudent, setNewStudent] = useState({name:'',age:0,major:''})

  const [student, setStudent] = useState([])
  const handleSubmit = () => {
    // setStudent([...student, newStudent])
    axios.post('http://localhost:3001/college-student/post',newStudent).then((res)=>{
    console.log(res.data)
    })
   
  }

  useEffect(()=>{
    axios.get('http://localhost:3001/college-student').then((res)=>{
      console.log(res.data)
      setStudent(res.data)
    })
  })
  return (
    <div className="App">
      <header className="App-header">
        <div className="Form-Card">
      <input type="text" placeholder="Enter Your Name" onChange={(e)=>setNewStudent({...newStudent, name:e.target.value})}/>
      <input type="number" placeholder="Enter Your Age" onChange={(e)=>setNewStudent({...newStudent, age:e.target.value})}/>
      <input type="text" placeholder="Enter Your Major" onChange={(e)=>setNewStudent({...newStudent, major:e.target.value})}/>
      <button onClick={handleSubmit}>Submit</button>
      </div>
<div className="student-list">
      <table>
    <thead>
      <tr>
        <th>S.No</th>
        <th>Name</th>
        <th>Age</th>
        <th>Major</th>
        <th>Action</th>
      </tr>
    </thead>
{student.map((stu,i)=>{
  return (
   
    <tbody>
      {/* Example student data */}
      <tr>
        <td>{i+1}</td>
        <td>{stu.name}</td>
        <td>{stu.age}</td>
        <td>{stu.major}</td>
        <td>
          <button>View</button>
          <button>Edit</button>
          <button>Delete</button>
        </td>
      </tr>
      
    </tbody>
 
  )
})}
    </table>  
     </div>
      </header>
    </div>
  );
}

export default App;
