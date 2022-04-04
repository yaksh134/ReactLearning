import React, { useRef, useState } from 'react'

export const SimpleForm = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    var password = useRef()

    const [namevalidator, setnamevalidator] = useState(true)
    const [emailvalidator, setemailvalidator] = useState(true)
    
    var nameHandler = (e) =>{
        if(e.target.value === ""){
            setnamevalidator(true)
        }else{
            setnamevalidator(false)
            console.log(e.target.value)
            setname(e.target.value)
        }
    }

    var emailHandler = (e) =>{
        if(e.target.value.length < 5){
            setemailvalidator(true)
        }else{
            setemailvalidator(false)
            console.log(e.target.value)
            setemail(e.target.value)
        }
    }

    var submit = (e) =>{
        e.preventDefault()
        if(password.current.value === ""){
            alert("Password is required")
        }
        console.log(name +  email + password.current.value)
    }

  return (
    <div class = "container">
        <form onSubmit={submit}>

        <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"
    onChange={(e) => nameHandler(e)}
    />
    {
        namevalidator ? <h6 style={{color:"red"}}>Name is required</h6> : ""
    }
    
  </div>
    <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
    onChange={(e) => emailHandler(e)}
    />

    {
        emailvalidator ? <h6 style={{color:"red"}}>Email is not valid</h6> : ""
    }
    
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
    ref={password}
    />
  </div>
  
  <button type="submit" class="btn btn-primary" disabled={namevalidator || emailvalidator} >Submit</button>
</form>

    </div>
  )
}
