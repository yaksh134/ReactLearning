import axios from 'axios'
import React, { useState } from 'react'

export const Cricket = () => {
    const [data, setdata] = useState('')
    
    const submit = (e) =>{
        e.preventDefault()

        const config = {
            method: 'GET',
            url: 'https://cricket-live-data.p.rapidapi.com/fixtures',
            headers: {
                'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com',
                'X-RapidAPI-Key': 'ad5c2ee64cmsh810dd3dc9b5be80p19b4cejsna6b6fbf13c2e'
            }
        }

        axios(config).then(res=>{
            setdata(res.data)
            console.log(res.data)
            console.log(res.data.results.length)
        })
    }
  return (
    <div>
        <input type="submit" value = "Get Fixtures" className='btn btn-outline-success' onClick={(e)=>{submit(e)}}/>

    {
        data!=='' && data.results.length>0 ?
        <div>
                <table class="table table-primary">
                <thead>
                    <tr>
                    <th scope="col">Team 1</th>
                    <th scope="col">Team 2</th>
                    <th scope="col">Venue</th>
                    <th scope="col">Date</th>
                    <th scope="col">Subtitle</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.results.map((match)=>{
                            return(
                                    <tr>
                                    <th scope="row">{match.away.name}</th>
                                    <th scope="row">{match.home.name}</th>
                                    <td>{match.venue}</td>
                                    <td>{match.date}</td>
                                    <td>{match.match_subtitle}</td>
                                    </tr>
                            )
                        })
                        

                    }
                
                </tbody>
                </table>
        </div> : null
}
    </div>
  )
}
