import React, { useState } from 'react'


export const FileUpload = () => {


    const style = {
        color : "red"
    }

    const [name, setname] = useState('')
    const [file, setfile] = useState()
    const [multiplefile, setmultiplefile] = useState([])

    const [latitude, setlatitude] = useState('')
    const [longitude, setlongitude] = useState('')


    const submit = () =>{
        const formData = new FormData()
        formData.append('file',file)
        formData.append('name',name)
    }

    const singlefilehandler = (e) =>{
        console.log(e.target.files)
        setfile(e.target.files[0])
        console.log(e.target.files[0].size)
        e.target.files[0].size > 800000 ? document.getElementById("error").innerHTML = "File size excedded" : document.getElementById("error").innerHTML = ""
    }

    const loc = (e) =>{
        e.preventDefault()
        navigator.geolocation.getCurrentPosition(position=>{
            console.log("Lattitue is : ",position.coords.latitude)
            console.log("Longitude is : ",position.coords.longitude)
            setlatitude(position.coords.latitude)
            setlongitude(position.coords.longitude)
        })
    }   
    

    

  return (
    <div>
        <form onSubmit={submit}>
            <input type="file" onChange={(e)=>{singlefilehandler(e)}} />
            <p id='error' style={style}></p>
            <input type= "submit" value = "GET LOCATION" onClick={(e)=>{loc(e)}}/>
        </form>


      
    </div>
  )
}


