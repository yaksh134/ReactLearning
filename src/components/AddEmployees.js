import React , {useState} from 'react'

export const AddEmployees = () => {
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');

    const firstnamehandler = (e) =>{
        console.log(e.target.value)
        setfirstname(e.target.value)
    }

    const submit = (e)=>{

        e.preventDefault()
        console.log("called..")
        console.log(firstname)
        console.log(lastname);
    }
  return (
    <div>
        <div>
            <h1>Add Employees</h1>
        </div>
        <div>
            <form onSubmit = {submit}>
                <label>First Name : </label>
                <input type="text" onChange={(e)=>firstnamehandler(e)}/>
                {firstname}
                <br/>
                <label>Last Name : </label>
                <input type="text" onChange={(e) => setlastname(e.target.value)}/>
                {lastname}
                <br/>
                <input type="submit" value="submit"/>
        </form>
        </div>

        <div>
            <h1>The data is : </h1>
            {firstname}
            <br/>
            {lastname}
        </div>

    </div>
  )
}
