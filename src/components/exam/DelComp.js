import { Button } from '@material-ui/core'
import React from 'react'

export const DelComp = (props) => {

    const del = (e) =>{
        props.newData(props.user.splice(1))
        console.log("delete called...")
    }
  return (
    <div>
        <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        props.user.map((u) => {
                            return (
                                <tr>
                                    <td>{u.name}</td> 
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <button class="btn btn-danger" onClick={()=>del()}>Delete</button>
    </div>
  )
}
