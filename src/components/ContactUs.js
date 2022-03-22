import React from 'react'

export const ContactUs = (props) => {

    var sty = {
        color : "red",
        background : "black"
    }

    var sty1 = {
        color : "black",
        background : "red"
    }
    
  return (
    <div>
        <h1>Contact Us</h1>
        <h3>{props.x}</h3>

        <table class="table">
  <thead>
    <tr>
      
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Contact Number</th>
    </tr>
  </thead>
  <tbody>
      {
      props.contactPersons.map((person)=>{
          return(
    <tr>
      
      <td>{person.name}</td>
      <td>{person.age}
      {
          person.age>20?<h4 style={sty1}>You are old</h4>:<h4 style={sty}> You are young</h4>
      }
      </td>
      <td>{person.contactNo}</td>
    </tr>
          )
})
}
    
  </tbody>
</table>
    </div>
  )
}

