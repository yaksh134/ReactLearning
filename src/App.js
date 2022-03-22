import logo from './logo.svg';
import './App.css';
import Home from './components/Home';

import AboutUs from './components/AboutUs';
import { ContactUs } from './components/ContactUs';


function App() {
  
  // var a = 10
  // var b = 20
  // var c = a + b
  // var salary = 310.18
  // var name = "Yaksh"
  // var isMarried = false
  // const numbers = [1,2,3,4,5,6]
  
  // var style = {
  //   color : "red"
  // }

  // var style1={
  //   color : "orange"
  // }
  // var a = (b)=>{
  //   console.log("HelloWorld " + b)
  // }

  

  // var employee = {
  //   name : "Yaksh",
  //   salary : 10000,
  //   age : 20
  // }

  // var students = [
  //   {
  //     name : "Yaksh",
  //     age : 20,
  //     marks : 100
  //   },
  //   {
  //     name : "Virat",
  //     age : 34,
  //     marks : 99
  //   }

  // ]

  
  // console.log(name)

  var ContactPersons = [
    {
      name : "Yaksh",
      age : 20,
      contactNo : 123456789
    },
    {
      name : "Vidit",
      age : 20,
      contactNo : 987654321
    },
    {
      name : "Vraj",
      age : 22,
      contactNo : 5687453543
    }

  ]
  var x = 100
  var homeName = "Yaksh"
  return (
    <div className="App">
      {/* <h1>Bye World</h1>
      <h2>{c}</h2>
      <h2>Salary is  : {salary}</h2>
      <h2>{name}</h2>
      <h2>is married : {
        isMarried ? "Yes" : "NO"
        } 
      </h2>

      <button onClick={()=>a(50)}>click me</button>

      <div style={style}>
        <h2>Name : {employee.name}</h2>
        <h2>Salary : {employee.salary}</h2>
        <h2>Age : {employee.age}</h2>
      </div>

    <div style={style1}>
        <h2>
          {
            numbers.map((number)=>number*2+ " ")
          }
        </h2>

        <h2>
          {
            students.map((student) => student.name + " "+student.age + " "+ student.marks+ " ") 
          }
        </h2>
        
    </div> */
    
    <div>
      <h1>Main APP component</h1>
    <Home homeName={homeName} />

    <ContactUs contactPersons = {ContactPersons} x ={x}/>
    <AboutUs/>

    </div>
    
    
    }

    </div>

    

    
  );
}

export default App;
