import { StylesContext } from '@material-ui/styles'
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const StockMarket = () => {
    const [ssymbol, setssymbol] = useState('')
    const [data, setdata] = useState('')
    
    const submit = (e) =>{
        console.log("submit called")
        e.preventDefault()

        const config = {
            method : 'GET',
            url : 'https://nse-data1.p.rapidapi.com/search_stock',
            params : {
                stockname : ssymbol
            },
            headers:{
                'X-RapidAPI-Host': 'nse-data1.p.rapidapi.com',
                'X-RapidAPI-Key': 'ad5c2ee64cmsh810dd3dc9b5be80p19b4cejsna6b6fbf13c2e'
            }
        }
        axios(config).then(res=>{
            console.log("hi")
            setdata(res.data)
            console.log(res.data)
            
        })
    }
  return (
    <div className='container-fluid'>
        <form>
      <div class="form-group">
        <label for="exampleInputPassword1">Enter Stock Symbol</label>
        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Symbol" onChange={(e)=>{setssymbol(e.target.value)}}/>
      </div>
      <button type="submit" class="btn btn-primary" onClick={(e)=>{submit(e)}}>Get Stock Details</button>
      </form>
      <br/>

      {
          data!==''?
          <span style={{fontWeight: 'bold' ,textDecorationLine : 'underline' , fontSize : '30px'}}>{data.body.symbols[0].symbol_info}</span> :null
      }<hr/>

      {
          data!==''?
          data.body.search_content.map((sc)=>{
              return(<>
                  <div class="card">
                    <h5 class="card-header">{sc.title}</h5>
                    <div class="card-body">
                        
                        <p class="card-text">{sc.content}</p>
                        {/* <a href={sc.url} class="btn btn-primary">{sc.url}</a> */}
                        <Link class = "btn btn-primary" to ={sc.url}>See More</Link>
                    </div>
                  </div>
                    <hr/>
                  </>
                  
                  //`${res.data.title} updated successfully`
              )
          }):null
      }

        
    </div>
  )
}
