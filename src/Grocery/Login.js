
 import React,{useContext, useState} from 'react'
 import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { NavContext } from './NavContext';
 
 export const Login = () => {
  const {setPage} = useContext(NavContext)
  const handleSubmit = (event)=>{
    event.preventDefault();
   if( event.target.name.value === "anu" && event.target.password.value === "1234"){
    setPage(true)
   }
   else{
    alert("Enter Correct UserName and Password ! ")
   } 
  }


   return (
     <div className='loginPg'>
      
       <Box  component="form" autoComplete='off' className='loginBox' onSubmit={handleSubmit}> 
       
       <Typography component="h1" variant="h5"style={{paddingBottom:"2rem",color:'#e54219dd'}}>
            Sign in
          </Typography>
       <TextField
          required
          id="outlined-required"
          label="Username - anu"
          name="name"
         
        /><br/>
         <TextField
          id="outlined-password-input"
          label="Password - 1234"
          type="password"
          name="password"
        />
        <Button type='submit' className='LoginBtn'>Login</Button>
       </Box>
     </div>
   )
 }
 