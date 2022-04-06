import { useState } from "react"

const useInput = ()=>{
    const [value, setvalue] = useState('')

    const valueChangeHandler = (e)=>{
        setvalue(e.target.value)
        console.log(e.target.value)
    }

    return{
        value : value,valueChangeHandler
    }
}

export default useInput