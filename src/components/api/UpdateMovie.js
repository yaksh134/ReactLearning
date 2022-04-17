import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const UpdateMovie = () => {
    const  id = useParams().id
    const [movie, setmovie] = useState('')
    const [moviename, setmoviename] = useState(movie.title)
    const [moviegenre, setmoviegenre] = useState(movie.genre)

    const update = async(e) =>{
        e.preventDefault()
        var movie = {
            title : moviename,
            genre : moviegenre
        }

        await axios.put("https://primeflixapis.herokuapp.com/api/updateMovie/"+id,movie,{
            headers : {'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWMxN2VhZTIyZDVlODUxOGJhNzY1ZiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTAyMDI2NzIsImV4cCI6MTY1MDQ2MTg3Mn0.Xh6g8DfwQhbQUItNZU2iqS7iyseR48yceau5kRdHGtU'}
        }).then(res=>{
            toast.success(`${res.data.title} updated successfully` , {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        })

        
    }


    const getMovieById = async() =>{
        axios.get("https://primeflixapis.herokuapp.com/api/getMovie/"+id,{
            headers : {'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWMxN2VhZTIyZDVlODUxOGJhNzY1ZiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTAyMDI2NzIsImV4cCI6MTY1MDQ2MTg3Mn0.Xh6g8DfwQhbQUItNZU2iqS7iyseR48yceau5kRdHGtU'}
    }).then((res)=>{
            setmovie(res.data)
            setmoviename(res.data.title)
            setmoviegenre(res.data.genre)

            console.log(res.data)
        })
    }

    useEffect(() => {
      getMovieById()
    
      return () => {
        
      }
    }, [])
    

  return (
    <div>
        {/* {id} */}
        <form onSubmit = {update}>
            <div class="form-group">
                    <label for="exampleInputEmail1">Movie NAME</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue = {movie.title} onChange = {(e)=>setmoviename(e.target.value)}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Movie Genre</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue ={movie.genre}
                    onChange = {(e)=>setmoviegenre(e.target.value)}
                    />
                </div>
                

                <button type="submit" class="btn btn-primary">Update Movie</button>
            </form>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

    </div>
  )
}
