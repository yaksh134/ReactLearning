import { Slider, Switch } from '@mui/material'

import { Box, color } from '@mui/system'
import React, { useEffect, useState } from 'react'

export const MuiDemo2 = () => {
    const [min, setmin] = useState(0)
    const [max, setmax] = useState(100)
    const [value, setvalue] = useState([min,max])
    const [swicheck, setswicheck] = useState(false)
    const [color, setcolor] = useState('')

    const valueChangeHandler = (e,newValue) =>{
        setvalue(newValue)
    }

    const swiChangeHandler = (e,newSwi) =>{
        setswicheck(newSwi)
        //swicheck?setcol("primary"):setcol("secondary")
    }

    useEffect(() => {
      setmin(value[0])
      setmax(value[1])  
    }, [value])

    useEffect(() => {
      console.log(swicheck);
      swicheck?setcolor("primary"):setcolor("secondary")
    }, [swicheck])
    

    


    // const Theme = createTheme({
        
    //     palette: {
            
    //       mode: 'dark',
    //     },
    //   });
    

    
    
    
    
  return (

    
    <div>
        <Box sx={{width:300,margin:10}}>

            <Switch name='swi'checked={swicheck} onChange={swiChangeHandler}/>
            <Slider
                value={value}
                valueLabelDisplay="on"
                onChange={valueChangeHandler}
                //color={color}
            />x
        </Box>
        <input type='text' disabled placeholder='Min Value' name='min' value={min}/>
        <input type='text' disabled placeholder='Max Value' name='max' value={max}/>
    </div>
    
  )
}
