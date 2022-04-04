import React from 'react'
import { Link } from 'react-router-dom'
import { EmployeeDetails } from '../EmployeeDetails'
export const ViewEmployee = (props) => {
  return (
    <div>
        
        <table>
            <tr>
                <th>
                    ID
                </th>
                <th>
                    First Name
                </th>
                <th>
                    Last Name
                </th>
            </tr>

            <tr>
                <Link to={`/employeedetails/${props.users.id}`}><td>{props.users.id}</td></Link>
                <td>{props.users.firstname}</td>
                <td>{props.users.lastname}</td>
            </tr>

        </table>
    </div>
  )
}
