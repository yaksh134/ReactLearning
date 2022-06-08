import logo from './logo.svg';
import './App.css';
import Home from './components/Home';

import AboutUs from './components/AboutUs';
import { ContactUs } from './components/ContactUs';
import { Link, Route, Router, Routes } from 'react-router-dom';
import { Movies } from './components/Movies';
import { MovieDetail } from './components/MovieDetail';
import { MainMenu } from './components/MainMenu';
import { AddEmployees} from './components/AddEmployees';
import { EmployeeDetails } from './EmployeeDetails';
import { AddTicket } from './components/AddTicket';
import { useState} from 'react';
import { ListTicket } from './components/ListTicket';
import { SimpleForm } from './components/SimpleForm';
import { SimpleFormCustomHook } from './components/SimpleFormCustomHook';
import { UsersApi } from './components/UsersApi';
import { GetProducts } from './components/api/GetProducts';
import { AddProduct } from './components/api/AddProduct';
import { UpdateProduct } from './components/api/UpdateProduct';
import { GetMovies } from './components/api/GetMovies';
import { AddMovies } from './components/api/AddMovies';
import { UpdateMovie } from './components/api/UpdateMovie';
import axios from 'axios';
import { LocalStorage } from './components/LocalStorage';
import { FileUpload } from './components/FileUpload';
import { MatrialTable } from './components/MUI/MatrialTable';
import { Login } from './components/ProtectedRoutes/Login';
import {List} from './components/ProtectedRoutes/List'
import { Error404 } from './components/Error404';
import { QueryClient, QueryClientProvider } from 'react-query';
import { QueryDemo } from './Query/QueryDemo';
import { Loading } from './components/Loading';
import { QueryDemo1 } from './Query/QueryDemo1';
import { QueryDemo2 } from './Query/QueryDemo2';
import { Weather } from './components/api/Weather';
import { StockMarket } from './components/api/StockMarket';
import { Cricket } from './components/api/Cricket';
import { MuiDemo } from './components/MUI/MuiDemo';
import { MuiDemo2 } from './components/MUI/MuiDemo2';
import { ApiBook } from './components/exam/ApiBook';
import { DelComp } from './components/exam/DelComp';




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

  // var ContactPersons = [
  //   {
  //     name : "Yaksh",
  //     age : 20,
  //     contactNo : 123456789
  //   },
  //   {
  //     name : "Vidit",
  //     age : 20,
  //     contactNo : 987654321
  //   },
  //   {
  //     name : "Vraj",
  //     age : 22,
  //     contactNo : 5687453543
  //   }

  // ]
  // var x = 100
  // var homeName = "Yaksh"

//   const [movies, setmovies] = useState([])

//   const allMovies = () =>{
//     axios.get("https://primeflixapis.herokuapp.com/api/getMovies",{
//         headers : {'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWMxN2VhZTIyZDVlODUxOGJhNzY1ZiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTAyMDI2NzIsImV4cCI6MTY1MDQ2MTg3Mn0.Xh6g8DfwQhbQUItNZU2iqS7iyseR48yceau5kRdHGtU'}
//     }).then((res)=>{
//         console.log(res.data)
//         setmovies(res.data)
//     })
// }

  const user = [{"name" : "Yaksh"},
  {"name":"Vidit"},
  {"name":"Vraj"}]


  const [tickets, settickets] = useState([
    {
      name : "Login Bug",
      description : "solve the login bug for premium users"
    },
    {
      name : "Logout Bug",
      description : "Solve the logout bug for free users"
    }
  ])

  const deleteTicket = (ticket)=>{
    settickets(tickets.filter(t => t.name !== ticket.name))
  }

  const addTicket = (ticket)=>{
    settickets([...tickets,ticket])
  }

  const [users, setusers] = useState(user)

  const queryClient = new QueryClient()
  return (
    <div className="App">
      {<div>

        {/* <SimpleForm/> */}
        {/* <SimpleFormCustomHook/> */}
        {/* <UsersApi/> */}
        {/* <AddProduct/>
        <GetProducts/>  */}

        {/* <AddMovies />
        <GetMovies /> */}

        {/* <Weather/>
       
        <StockMarket/>
        <Cricket/> */}

        {/* <MuiDemo2/> */}
        {/* <ApiBook/> */}
        <DelComp user = {users} newData={setusers}/>

        {/* <LocalStorage/> */}
        {/* <FileUpload/> */}
        {/* <MatrialTable/> */}
        {/* <Login/> */}

        
       
        
        {/* <Routes>
          <Route path='/UpdateMovie/:id' element = {<UpdateMovie/>}/>
          {sessionStorage.getItem('email')!=null?
          <Route path='/list' element = {<List/>}/>
          :"/"
        }

        <Route path='/*' element={<Error404/>}/>
        <Route path='/' element = {<AboutUs/>}/>
        </Routes> */}

        {/* <Routes>
          <Route path='/UpdateProduct/:id' element = {<UpdateProduct/>}/>
          
        </Routes> */}

        {/* <AddTicket addTicket = {addTicket}/>

        <ListTicket tickets = {tickets} deleteTicket = {deleteTicket}/> */}
        {/* <AddEmployees/> */}
        {/* <MainMenu/> */}
        
        {/* <Routes>
          <Route path='/employeedetails/:id' element={<EmployeeDetails/>}/>
        </Routes>
      
       <Routes>
        <Route path='/Movies' element={<Movies/>}/>
        <Route path='/Movies/MoviesDetail/:name' element={<MovieDetail/>}/>
      </Routes>  */}
      </div>

     
      
      
      
      
      /* <h1>Bye World</h1>
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
    
    // <div>
    //   <h1>Main APP component</h1>
    // <Home homeName={homeName} />

    // <ContactUs contactPersons = {ContactPersons} x ={x}/>
    // <AboutUs/>

    // </div>
    
    
    }

    </div>

    

    
  );
}

export default App;
