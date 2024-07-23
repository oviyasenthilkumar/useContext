
import React, { useContext }  from 'react';
import { TotalItems } from './TotalItems';

import { Button, Container } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import StarOutlineTwoToneIcon from '@mui/icons-material/StarOutlineTwoTone';
import { NavContext } from './NavContext';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';

function Puff({increment, decrement}) {
    let {setCart,cart,setCurrentPage}=useContext(NavContext);
   
    return(
        <>
            <div className='ProHead'>
               <Container>
                <div onClick={()=>{setCurrentPage("home")}} style={{display:"flex",paddingBottom:"10px"}}><ArrowCircleLeftOutlinedIcon/> <b> Back To Category</b></div>
                    <h1 >Spicy puff</h1>
                    <p style={{padding:"20px 0"}}>
                    From sweet red varieties, like Red Delicious, Fuji or Gala, to tangy green ones, like Granny Smith — my personal favorite that I enjoy with lime juice and a little salt when I want a savory snack — there sure is an apple for everyone. They’re commonly used in recipes, like pies, cookies, muffins, jam, salads, oatmeal, or smoothies. They also make a great snack on their own or wedged and smeared with nut butter.</p>
               </Container>
            </div>
        <Container style={{marginTop:"2rem"}}> 
        <div className='DatesRow'>
        {
                    TotalItems.filter(item => {
                         if(item.CommonName === "puff"){
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
export default Puff;