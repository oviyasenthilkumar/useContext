import React, { useContext }  from 'react';
import { TotalItems } from './TotalItems';

import { Button } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import StarOutlineTwoToneIcon from '@mui/icons-material/StarOutlineTwoTone';
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { NavContext } from './NavContext';
function AllProducts({increment, decrement}) {
    let {setCurrentPage,cart,setCart}=useContext(NavContext);

  
    return(
        <>
       
        
        <div className='AllProduct'>
            <div className='ProHead'>
               <Container>
                <div  onClick={()=>{setCurrentPage("home")}} style={{display:"flex",paddingBottom:"40px"}}><ArrowCircleLeftOutlinedIcon/> Back To Category</div>
                    <h1 >All Products</h1>
               </Container>
            </div>

            <Container>
                <div className='AllProductRow'>
                  
                    <Grid className='ProductsRow' xs={12}>
                
                    {
                    TotalItems.map((item,index) => 
                    <div className=' ProductCol' key={item.id}>
                        
                        <div>
                            
                            <div className='cardImg'>
                            <div className='cardIcon'>
                                <Button><img src='/GroceryImg/wishlist.svg' style={{width:"20px"}}/></Button>
                                <Button><img src='/GroceryImg/compare.svg' style={{width:"20px"}}/></Button>
                            </div>
                            <img src={item.img} />
                            </div>
                        </div>
                        <div className='cardCnt'>
                        <h3 style={{fontSize:"17px"}}>{item.name}</h3> 
                        <h4 style={{fontSize:"20px", padding:"10px 0"}}><b>${item.price}</b></h4>
                        <p ><StarOutlineTwoToneIcon style={{fontSize:"1rem"}}/> <StarOutlineTwoToneIcon style={{fontSize:"1rem"}}/> <StarOutlineTwoToneIcon style={{fontSize:"1rem"}}/> <StarOutlineTwoToneIcon style={{fontSize:"1rem"}}/> <StarOutlineTwoToneIcon style={{fontSize:"1rem"}}/> (0)</p>
                        <div >
                                <Button style={{fontSize:"1.5rem",marginLeft:"15%",color:"#000"}} key={item.id} onClick={decrement}> <b>-</b></Button>
                                <span><b>{cart}</b></span>
                                <Button style={{fontSize:"1rem",color:"#000"}} key={item.id} onClick={increment} > <b>+</b></Button>
                        </div>
                    
                        <Button className='cardBtn'onClick={(item)=>console.log(item)}>Add To Cart <NavigateNextIcon/></Button>
                        
                        </div>
                    </div>
                    )
                }
            
                    </Grid>   
                </div>
            
        </Container>
        </div> 
        </>
    )
}
export default AllProducts;