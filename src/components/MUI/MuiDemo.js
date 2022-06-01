//import { Box } from '@material-ui/core'
import { Button, ButtonGroup, Checkbox, Fab, FormControlLabel, FormGroup, IconButton } from '@material-ui/core';
import Box from '@mui/material/Box';
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import NavigationIcon from '@mui/icons-material/Navigation';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';


export const MuiDemo = () => {
  return (
      <div>
    
        <Box
        sx={{
          height: 100,
          height: 300,
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9],
          },
        }}
      >
          

        </Box>
        <Button variant='contained' color='primary'>Hello World!!</Button>
        <Button variant='outlined' color='inherit'>Hello World!!</Button>
        <Button variant='text' color='error'>Hello World!!</Button>
        <Button variant='contained' color='secondary'>Hello World!!</Button>
        <div>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete
            </Button>
            <Button variant='contained' color='primary' endIcon={<SendIcon/>}>Send</Button>

        </div>

        <div>
            
                <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon />
                </IconButton>

                <IconButton aria-label="fingerprint" color="success">
                <FingerprintIcon />
                </IconButton>
        </div>

        <div>
            
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
                </ButtonGroup>
        </div>

        <div>
            
            <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
            <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
            </FormGroup>
        </div>

        <div>
            
            <Fab variant="extended">
            <NavigationIcon sx={{ mr: 1 }} />
            Navigate
            </Fab>
        </div>

        <div>
            
            <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
            </FormControl>
        </div>

        



        </div>

        
    
  )
}
