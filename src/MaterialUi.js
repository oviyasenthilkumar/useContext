import React from 'react';
import Data from './Data.json';
import './Material.css'

import Container from '@mui/material/Container';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';

import ErrorTwoToneIcon from '@mui/icons-material/ErrorTwoTone';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ShareIcon from '@mui/icons-material/Share';

const actions = [
  { icon: <LinkedInIcon />, name: 'LinkedIn' },
  { icon: <InstagramIcon />, name: 'Instagram' },
  { icon: <FacebookIcon />, name: 'Facebook' },
  { icon: <ShareIcon />, name: 'Share' }
]
function MaterialUi(){
    return(
        <>
        <Container maxWidth="lg">
            <Typography align='center' variant="h5" style={{marginTop:"50px"}}>
                 Responsive Card Design       
            </Typography>
            <Grid container spacing={5} style={{marginTop:"10px"}}>
            {
             Data.map((e,index)=>(
       
        <Grid  spacing={5} xs={12} lg={4} md={6} style={{padding:'10px'}}>
            <Card spacing={5} >
      <CardMedia
      //  style={{borderRadius:"50px"}}
      
        component="img"
        alt="Employees"
        height="280"
        image={e.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {e.full_name}<br/>

         <Typography gutterBottom variant="p" style={{color:"rgb(147 146 146)", fontSize:"18px"}}>
         {e.role}
        </Typography>
        </Typography>
       
        
        
        <Typography variant="body2" color="text.secondary">
          <p>Employee Id:{e.id}</p>
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small"><FavoriteBorderIcon/></Button>
        <Button variant="outlined" endIcon={<ErrorTwoToneIcon/>}>
  More Info
</Button>
<Box sx={{ height: 60, transform: 'translateX(-10px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 0, right: 10 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
      </CardActions>
    </Card>
        </Grid>
             ))
        } 
            </Grid>
        </Container> 
       
        </>
    )
}
export default MaterialUi;