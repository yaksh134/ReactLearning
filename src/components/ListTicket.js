import React from 'react'
import { TicketDetails } from './TicketDetails'

export const ListTicket = (props) => {
  return (
    <div>
        {
            props.tickets.map((ticket)=>{
                return(<TicketDetails ticket = {ticket} deleteTicket = {props.deleteTicket}/>

                )
            })
        }
    </div>
  )
}
