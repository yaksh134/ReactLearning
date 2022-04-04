import React from 'react'

export const TicketDetails = (props) => {
  return (
    <div>
        <table class = "table">
            <tbody>
                <tr>
                    <td>{props.ticket.name}</td>
                    <td>{props.ticket.description}</td>
                    <td><button onClick={()=>{props.deleteTicket(props.ticket)}}>DELETE</button></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
