import axios from "axios"
import { useMutation } from "react-query";

const addData = (data) =>{
    return axios.post("https://reqres.in/api/users", data);
}

export function useAddData(){
    return useMutation(addData,
        {onSuccess:()=>console.log("success")},
        {onError : () => console.log("error")})
}