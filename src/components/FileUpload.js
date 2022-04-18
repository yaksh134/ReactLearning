import React, { useState } from 'react'

export const FileUpload = () => {

    const [name, setname] = useState('')
    const [file, setfile] = useState()
    const [multiplefile, setmultiplefile] = useState([])


    const submit = () =>{
        const formData = new FormData()
        formData.append('file',file)
        formData.append('name',name)
    }

    const singlefilehandler = (e) =>{
        console.log(e.target.files)
        setfile(e.target.files[0])
    }
  return (
    <div>
        <form onSubmit={submit}>
            <input type="file" onChange={(e)=>{singlefilehandler(e)}} multiple/>
            {/* <input type= "submit" value = "upload"/> */}
        </form>
    </div>
  )
}
