import React, { useContext } from 'react';
import { TotalItems } from './TotalItems';
import { Button } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import StarOutlineTwoToneIcon from '@mui/icons-material/StarOutlineTwoTone';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { NavContext } from './NavContext';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import Container from '@mui/material/Container';

function Discount({increment, decrement}) {
  let {setCart,cart,setCurrentPage}=useContext(NavContext);
   
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <>
        <Container maxWidth="lg">
        <h1>Total Discounts</h1>
        <Carousel responsive={responsive}>
        {
            TotalItems.map( item => 
            <div className='card'>
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
                        <Button style={{fontSize:"1.5rem",marginLeft:"15%",color:"#000"}} onClick={decrement}> <b>-</b></Button>
                        <span><b>{cart}</b></span>
                        <Button style={{fontSize:"1rem",color:"#000"}} onClick={increment}> <b>+</b></Button>
                   </div>
                   <Button className='cardBtn'>Add To Cart <NavigateNextIcon/></Button>
                 
                </div>
            </div>)
        }
        </Carousel>
        </Container>
        </>
    )
}
export default Discount;