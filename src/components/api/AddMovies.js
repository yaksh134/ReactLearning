import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GetMovies } from './GetMovies';
import {allMovies} from './GetMovies';

export const AddMovies = () => {

    const [moviename, setmoviename] = useState('')
    const [genre, setgenre] = useState('')
    
    const add = async(e)=>{
        e.preventDefault()
        var movie = {
            title : moviename,
            genre : genre
        }

        await axios.post("https://primeflixapis.herokuapp.com/api/addMovie",movie,{
            headers : {'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWMxN2VhZTIyZDVlODUxOGJhNzY1ZiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTAyMDI2NzIsImV4cCI6MTY1MDQ2MTg3Mn0.Xh6g8DfwQhbQUItNZU2iqS7iyseR48yceau5kRdHGtU'}
        }).then((res)=>{
            if(res.status === 200){
                toast.success(`${res.data.title} added successfully`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                
            }else{
                toast.error(`Movie not added `, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                
            }
            
            
            GetMovies.allMovies()
        })
    }
  return (
    <div>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />

        <div className='container'>
        <form onSubmit={add}>
        <div class="form-group">
            <label for="exampleInputEmail1">Movie Name</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Movie Name"
            onChange={(e)=>setmoviename(e.target.value)}
            />
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Movie Genre</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Genre"
            onChange={(e)=>setgenre(e.target.value)}/>
        </div>
        
        <button type="submit" class="btn btn-primary">Add Movie</button>
</form>
</div>

    </div>
  )
}
