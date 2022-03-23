import React from 'react'
import { Link } from 'react-router-dom'

export const Movies = () => {
  var movies = [
    {
      name : "Pushpa",
      time : "2:30",
      rating : "5"
    },
    {
      name : "83",
      time : "3:30",
      rating : "3"
    },
    {
      name : "KGF",
      time : "2:45",
      rating : "4"
    },
    {
      name : "RRR",
      time : "1:50",
      rating : "5"
    }
  ]
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Time</th>
            <th scope="col">Rating</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => {
            return (
              <tr>
                <td><Link to = {`/Movies/MoviesDetail/${movie.name}`}>{movie.name}</Link></td>
                <td>
                  {movie.time}
                  
                </td>
                <td>{movie.rating}</td>
              </tr>
            );
          })}
        </tbody>
      </table>



    </div>
    
  )
}
