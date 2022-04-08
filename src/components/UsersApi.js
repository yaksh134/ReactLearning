import axios from 'axios'
import React, { useState } from 'react'

export const UsersApi = () => {

    const [users, setusers] = useState([])
    const [name, setname] = useState('')
    const [job, setjob] = useState('')
    
    const getApi = ()=>{
        axios.get("https://reqres.in/api/users?page=2").then(res =>{
            console.log(res.data.data)
            setusers(res.data.data)

        })
    }

    const postApi = () =>{
        const newUser = {
            name : "Rahul",
            job : "Cricketer"
        }
        axios.post("https://reqres.in/api/users/",newUser).then(res=>{
            console.log(res.data)
            alert("data inserted")
        })
    }

    const deleteApi = () =>{
        axios.delete("https://reqres.in/api/users/2").then(res=>{
            console.log(res.status)
            if(res.status === 204){
                alert("Data Deleted")
            }else{
                alert("Data not deleted")
            }
        })
    }

    const submit = (e) =>{
        e.preventDefault()
        var data = {
            name : name,
            job : job
        }

        axios.post("https://reqres.in/api/users/",data).then(res=>{
            console.log(res.data)
            alert("data inserted")
        })
    }
  return (
    <div>
        <button type = "button" class = "btn btn-primary" onClick={getApi}>get users</button>
        <hr/>
        <button type = "button" class = "btn btn-success" onClick={postApi}>Add User</button>
        <hr/>
        
        <button  class = "btn btn-danger" onClick={deleteApi}>Delete User</button>
        <hr/>
        <div class="container">
        <form onSubmit={submit}>
            <div class="form-group">
                <label for="exampleInputEmail1">Fisrt name </label>
                <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"
                onChange={(e)=>setname(e.target.value)}/>
                
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Job</label>
                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="job"
                onChange={(e)=>setjob(e.target.value)}
                />
            </div>
            
            <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
        <hr/>
        {
            users.length>0 ?
        <div>
                <table class="table table-primary">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>{
                            return(
                                    <tr>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.email}</td>
                                    </tr>
                            )
                        })
                        

                    }
                
                </tbody>
                </table>
        </div> : "NO DATA"
}
        
    </div>
  )
}
