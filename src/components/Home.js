import React from 'react'

export default function Home(props) {
  return (
    <div>
        <h1>
            Home Component
        </h1>
        <h4>
            name is : {props.homeName}
        </h4>
    </div>
  )
}
