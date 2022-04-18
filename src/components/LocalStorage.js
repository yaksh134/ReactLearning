import React from 'react'

export const LocalStorage = () => {
    var data = {
        name : "Yaksh",
        email : "yaksh134@gmail.com"
    }

    const submit = () =>{
        localStorage.setItem('name' ,data.name)
        localStorage.setItem('email', data.email)
    }
  return (
    <div>
        <button value= "submit" onClick={submit}>STORE TO LOCALSTORAGE</button><br/>
        Name : {localStorage.getItem('name')}<br/>
        Email : {localStorage.getItem('email')}
    </div>
  )
}
