import React from 'react'
import { useState } from 'react'

export const AddTicket = (props) => {

    const [name, setname] = useState('')
    const [description, setdescription] = useState('')

    const submit = (e)=>{
        e.preventDefault();
        var obj = {
            name : name,
            description : description
        }
        props.addTicket(obj)
    }
  return (
    <div>
        <h1>TICKET DETAILS</h1>
        <form onSubmit={submit}>
            <label>Ticket name  : </label>
            <input type="text" onChange={(e)=>{setname(e.target.value)}}/><br/>
            <label>Ticket Description  : </label>
            <input type="text" onChange={(e)=>{setdescription(e.target.value)}}/><br/>
            <input type="submit" value="SUBMIT"/>

        </form>
    </div>
  )
}
