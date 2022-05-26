import axios from "axios";
import { useQuery } from "react-query";

export function useServices(a){
    return useQuery(["demo1",a],async ()=>{
        return await axios.get("https://reqres.in/api/users?delay=3");
    },{
        enabled:false
    })
}

export function useService1(b){
    return useQuery(["demo2",b],async ()=>{
        return await axios.get("https://reqres.in/api/users/2");
    },{
        enabled:false
    })
}