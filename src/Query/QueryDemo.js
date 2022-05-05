import React from 'react'
import { useGetUserData } from './QueryServices'

export const QueryDemo = () => {


   
        const {isLoading , isError , data , error } = useGetUserData()
        if(isLoading){
            console.log("loading....")
        }
        if(data){
            console.log(data)
        }
        if(isError){
            console.log("isError ....")
        }
    
  return (
    <div>
        {isLoading?
           <button class="btn btn-primary" type="button" disabled>
           <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
           Loading...
         </button>
          :
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

