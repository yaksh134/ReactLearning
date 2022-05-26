import axios from 'axios'
import React, { useState } from 'react'

export const Weather = () => {
    const [city, setcity] = useState('')
    const [data, setdata] = useState('')

    const getWeatherData = async(e) =>{
        e.preventDefault()

        var config = {
            method: 'GET',
            url: 'https://community-open-weather-map.p.rapidapi.com/weather',
            params : {
                q : city
            },
            headers: {
                'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
                'X-RapidAPI-Key': 'ad5c2ee64cmsh810dd3dc9b5be80p19b4cejsna6b6fbf13c2e'            
            }
        }

        axios(config).then(res=>{
            setdata(res.data)
            console.log(res.data)
        })
    }
  return (
  <div className='container-fluid'>
      <form>
      <div class="form-group">
        <label for="exampleInputPassword1">Enter city</label>
        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="City" onChange={(e)=>{setcity(e.target.value)}}/>
      </div>
      <button type="submit" class="btn btn-primary" onClick={(e)=>{getWeatherData(e)}}>Get Weather</button>

          {/* <input type="submit" onClick={(e)=>{getWeatherData(e)}}/> */}
      </form>
      <br/>

    {
        data!==''?
       "Weather for "+data.name:
        null
    }<hr/>
      {
          data!==''?
          "Condition : "+data.weather[0].main:
          null
      }<br/>
      {
          data!==''?
          "Current Temperature : "+((data.main.temp)-273.15).toFixed(2):null
      }<br/>

      {
          data!==''?
          "Feels Like : "+(data.main.feels_like-273.15).toFixed(2):null
      }
        
        
    
  </div>

  )
}
