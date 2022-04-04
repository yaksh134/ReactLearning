import React , {useState} from 'react'
import { ViewEmployee } from './ViewEmployee';

export const AddEmployees = () => {
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [id, setid] = useState('')
    const [users, setusers] = useState([])

    

    const firstnamehandler = (e) =>{
        console.log(e.target.value)
        setfirstname(e.target.value)
    }

    



    const submit = (e)=>{

        e.preventDefault()
        console.log("called..")
        console.log(firstname)
        console.log(lastname);

        var obj = {
            id : id,
            firstname : firstname,
            lastname : lastname
        }

        setusers([...users,obj])
    }
  return (
    <div>
        <div>
            <h1>Add Employees</h1>
        </div>
        <div>
            <form onSubmit = {submit}>
                <div>
                    <label>ID : </label>
                    <input type="text" onChange={(e)=>setid(e.target.value)}/>
                    {/* {id} */}
                </div>
                <div>
                    <label>First Name : </label>
                    <input type="text" onChange={(e)=>firstnamehandler(e)}/>
                    {/* {firstname} */}
                </div>
                <div>
                    <label>Last Name : </label>
                    <input type="text" onChange={(e) => setlastname(e.target.value)}/>
                    {/* {lastname} */}
                </div>
                
                <input type="submit" value="submit"/>
        </form>
        </div>

       

    
         {

             users.map((user)=>{
                 return(
                   
                    <ViewEmployee users={user}/>
                     
                 )
             })
         }  
        
        

    </div>
  )
}
