import React from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetail = () => {
  var name = useParams().name
  return (
    <div>MovieDetail
      Name is : {name}
    </div>
  )
}
