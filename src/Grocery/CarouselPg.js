import React,{useContext} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Container from '@mui/material/Container';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { NavContext } from './NavContext';

    

function CarouselPg(){
    let {setCurrentPage}=useContext(NavContext)

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
            <h2 className='Love'>Love Our Categories</h2>
           
            <Carousel responsive={responsive}>
            <div className='loveCol'>
                <div>
                    <img src='GroceryImg/love1.jpg'/>
                </div>
                <div className='loveCnt'>
                    <h4>All Products</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <a href='#' onClick={()=>{setCurrentPage("allProduct")}}>Go To Category <NavigateNextIcon className='loveCntIcon'/> </a>
                </div>
            </div>
            <div className='loveCol'>
                <div>
                    <img src='GroceryImg/love2.jpg'/>
                </div>
                <div className='loveCnt'>
                    <h4>Vegetables</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <a href='#' onClick={()=>{setCurrentPage("veg")}}>Go To Category <NavigateNextIcon className='loveCntIcon'/> </a>
                </div>
            </div>
            <div className='loveCol'>
                <div>
                    <img src='GroceryImg/love3.jpg'/>
                </div>
                <div className='loveCnt'>
                    <h4>Fruits</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <a href='#' onClick={()=>{setCurrentPage("fruits")}}>Go To Category <NavigateNextIcon className='loveCntIcon'/> </a>
                </div>
            </div>
            <div className='loveCol'>
                <div>
                    <img src='GroceryImg/love4.jpg'/>
                </div>
                <div className='loveCnt'>
                    <h4>Cake</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <a href='#' onClick={()=>{setCurrentPage("cakes")}}>Go To Category <NavigateNextIcon className='loveCntIcon'/> </a>
                </div>
            </div>
            <div className='loveCol'>
                <div>
                    <img src='GroceryImg/love5.jpg'/>
                </div>
                <div className='loveCnt'>
                    <h4>Spices & Herbs</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <a href='#' onClick={()=>{setCurrentPage("herb")}}>Go To Category <NavigateNextIcon className='loveCntIcon'/> </a>
                </div>
            </div>
            <div className='loveCol'>
                <div>
                    <img src='GroceryImg/love6.jpg'/>
                </div>
                <div className='loveCnt'>
                    <h4>Puffs</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <a href='#' onClick={()=>{setCurrentPage("puff")}}>Go To Category <NavigateNextIcon className='loveCntIcon'/> </a>
                </div>
            </div>
            <div className='loveCol'>
                <div>
                    <img src='GroceryImg/love7.jpg'/>
                </div>
                <div className='loveCnt'>
                    <h4>Green Leaves</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <a href='#' onClick={()=>{setCurrentPage("plant")}}>Go To Category <NavigateNextIcon className='loveCntIcon'/> </a>
                </div>
            </div>
            </Carousel>
          
        </Container>
       
        
   
        </>
      )
}

export default CarouselPg;