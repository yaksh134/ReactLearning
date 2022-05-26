import React, { useEffect } from 'react'
import { useService1 } from './QueryServices1'

export const QueryDemo1 = () => {
    const res1 = useService1("demo1");
    const res2 = useService1("demo2");

    useEffect(() => {
        if(res1.isFetched || res1.isLoading){
            console.log(res1)
        }

        if(res2.isFetched || res2.isLoading){
            console.log(res2)
        }
        
        
      
    }, [res1.status,res2.status])

    
    
  return (
    <div>
        <button class = "btn btn-primary" onClick={()=>res1.refetch()}>DEMO1</button><br/><br/>
        <button class = "btn btn-primary" onClick={()=>res2.refetch()}>DEMO2</button>
    </div>
  )
}
