import React from 'react'
import { ScaleLoader } from 'react-spinners';
import { Loading } from '../components/Loading';


import { useGetUserData } from './QueryServices'

export const QueryDemo = () => {


   
        var flag = false;
        const res = useGetUserData()
        if(res.isLoading){
          flag = true;
            console.log("loading....")
            console.log("res => ",res)
        }
        if(res.data){
            console.log(res.data)
        }
        if(res.isError){
            console.log("isError ....")
        }
    
  return (
    <div>
        {/* {res.isLoading?
           <button class="btn btn-primary" type="button" disabled>
           <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
           Loading...
         </button>
          :
          <button className='btn btn-primary'>Data Loaded </button>

        } */}

        {
          flag ? <Loading/>:
          <button className='btn btn-primary'>Data Loaded </button>
        }

        {/* {isError?<button class="btn btn-danger" type="button" disabled>
           <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
           Error!!!
         </button>
         :
         <button className='btn btn-primary'>Data Loaded </button>
        } */}



        
    </div>
  )
}

