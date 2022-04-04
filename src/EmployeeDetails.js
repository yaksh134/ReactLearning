import React from 'react'
import { useParams } from 'react-router-dom'

export const EmployeeDetails = () => {
    var id = useParams().id;
  return (
    <div>
        <h1>EmployeeDetails</h1>
        <h2>Id : {id}</h2>


    </div>
  )
}
