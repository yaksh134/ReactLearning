import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { AddMovies } from './AddMovies';



export const GetMovies = () => {

    
   const [movies, setmovies] = useState([])

    const allMovies = () =>{
        axios.get("https://primeflixapis.herokuapp.com/api/getMovies",{
            headers : {'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWMxN2VhZTIyZDVlODUxOGJhNzY1ZiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTAyMDI2NzIsImV4cCI6MTY1MDQ2MTg3Mn0.Xh6g8DfwQhbQUItNZU2iqS7iyseR48yceau5kRdHGtU'}
        }).then((res)=>{
            console.log(res.data)
            setmovies(res.data)
        })
    }

    const deleteMovie = (id) =>{
        axios.delete("https://primeflixapis.herokuapp.com/api/deleteMovie/"+id,{
            headers : {'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWMxN2VhZTIyZDVlODUxOGJhNzY1ZiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTAyMDI2NzIsImV4cCI6MTY1MDQ2MTg3Mn0.Xh6g8DfwQhbQUItNZU2iqS7iyseR48yceau5kRdHGtU'}
        }).then((res)=>{
            if(res.status === 200){
                toast.error(`Movie deleted`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }
            allMovies()
        })
        
    }

    useEffect(() => {
      allMovies()
    
      return () => {
        
      }
    }, [])
    
  return (
    <div>
        <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Movie Name</th>
                        <th scope="col">Genre</th>
                        
                        
                    </tr>
                </thead>
                
                <tbody>
                    {
                        movies.map((movie) => {
                            return (<tr>
                                <th scope="row">{movie._id}</th>
                                <td>{movie.title}</td>
                                <td>{movie.genre}</td>
                                
                                <td><button className="btn btn-danger" onClick={()=> {deleteMovie(movie._id)}}>DELETE MOVIE</button>
                                <Link to = {`/UpdateMovie/${movie._id}`}><button className="btn btn-warning">UPDATE MOVIE</button></Link></td>

                            </tr>

                            )
                        })
                    }


                </tbody>
            </table>
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
    </div>
  )
}

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWMxN2VhZTIyZDVlODUxOGJhNzY1ZiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTAyMDI2NzIsImV4cCI6MTY1MDQ2MTg3Mn0.Xh6g8DfwQhbQUItNZU2iqS7iyseR48yceau5kRdHGtU
export default GetMovies;