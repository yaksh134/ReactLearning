import React from 'react'

import { Loading } from '../components/Loading'
import { useAddData } from './QueryService2'

export const QueryDemo2 = () => {
    const res1 = useAddData()
    console.log("res :",res1)

    const submit = () =>{
        
        var data = {
            name : "Yaksh Patel",
            job : "Cricketer"
        }
        res1.mutate(data)
        console.log(res1)
    }
    
  return (
    <div>
        {/* {
            res1.isLoading ? <Loading/> :<button className='btn btn-outline-primary'onClick={submit}>Click Here</button>
        } */}
        {/* <button onClick={submit}>Click Here</button> */}
        

       

        {
            res1.isSuccess ? <button className='btn btn-outline-success' disabled onClick={submit}>Data Loaded</button>:<button className='btn btn-outline-primary'onClick={submit}>Click Here</button>
        }
    

    </div>
  )
}
