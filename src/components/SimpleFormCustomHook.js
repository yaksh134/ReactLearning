import React from 'react'
import useInput from './hooks/UserInput'

export const SimpleFormCustomHook = () => {

    const {value : email , valueChangeHandler: emailChangeHandler} = useInput()
    const{value : name,valueChangeHandler : nameChangeHandler} = useInput()
    const{value : password , valueChangeHandler : passwordChangeHandler} = useInput()
    const{value : radio , valueChangeHandler : radioChangeHandler} = useInput()
    const{value : choose , valueChangeHandler : chooseChangeHandler} = useInput()

    const submit = (e) =>{
        alert(`name : ${name} email : ${email} password : ${password} gender : ${radio} selected : ${choose}`)
    }

  return (
    <div class = "container">
        <form onSubmit={submit}>

        <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"
   onChange={nameChangeHandler}
    />
    {name}
    
  </div>
    <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
    onChange={emailChangeHandler}
    />
    {email}

   
    
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
    onChange={passwordChangeHandler}
    />
  </div>
  {password}

  <div class="form-group">
 
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="male" onChange={radioChangeHandler}/>
    <label class="form-check-label" for="flexRadioDefault1">
        Male
    </label>
    </div>
    <div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="female" onChange={radioChangeHandler}/>
    <label class="form-check-label" for="flexRadioDefault2">
       Female
    </label>

  </div>

  <div class = "form-group">
  <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" onChange={chooseChangeHandler}>
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  </div>
  
  <button type="submit" class="btn btn-primary" >Submit</button>
</form>

    </div>
  )
}
