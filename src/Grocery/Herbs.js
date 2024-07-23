import React, { useContext }  from 'react';
import { TotalItems } from './TotalItems';

import { Button, Container } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import StarOutlineTwoToneIcon from '@mui/icons-material/StarOutlineTwoTone';

import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { NavContext } from './NavContext';


function Herbs({increment, decrement}) {
    let {setCart,cart,setCurrentPage}=useContext(NavContext);
   
    return(
        <>
             <div className='ProHead' style={{height:"33vh"}}>
               <Container>
                <div onClick={()=>{setCurrentPage("home")}} style={{display:"flex",paddingBottom:"10px",cursor:"pointer"}}><ArrowCircleLeftOutlinedIcon/> <b> Back To Category</b></div>
                    <h1 >Herbs and Green Leaves</h1>
                    <p style={{padding:"20px 0"}}>
                    Shop Laptop Feature Only The Best Laptop Deals On The Market. By Comparing Laptop Deals From The Likes Of PC World, Comet, Dixons, The Link And Carphone Warehouse, Shop Laptop Has The Most Comprehensive Selection Of Laptops On The Internet. At Shop Laptop, We Pride Ourselves On Offering Customers The Very Best Laptop Deals. From Refurbished Laptops To Netbooks, Shop Laptop Ensures That Every Laptop - In Every Colour, Style, Size And Technical Spec - Is Featured On The Site At The Lowest Possible Price.</p>
               </Container>
            </div>
        <Container style={{marginTop:"2rem"}}> 
        <div className='DatesRow'>
        {
                    TotalItems.filter(item => {
                         if(item.CommonName === "Plants"){
                            return item
                        }
                    }).map( item => 
                      
                    <div className='DatesCol'>
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
                                <Button style={{fontSize:"1.5rem",marginLeft:"15%",color:"#000"}}  onClick={decrement}> <b>-</b></Button>
                                <span><b>{cart}</b></span>
                                <Button style={{fontSize:"1rem",color:"#000"}}  onClick={increment}> <b>+</b></Button>
                        </div>
                        <Button className='cardBtn'>Add To Cart <NavigateNextIcon/></Button>
                        
                        </div>
                    </div>
                   
                    )
                }
                </div>
                </Container> 
        </>
    )
}
export default Herbs;