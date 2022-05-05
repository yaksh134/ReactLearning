import axios from "axios";
import { useQuery } from "react-query";

export function useGetUserData(){
    return useQuery('demo',async()=>{
        return await axios.get("https://reqres.in/api/users?delay=3")
    })
}