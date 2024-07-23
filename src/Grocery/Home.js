import React from 'react';

import Carousel from 'react-material-ui-carousel';
import Item from './Item.js';


function Home(){
   
    const images=[
        {
            id:'1',
            imgPath:'/GroceryImg/ban1.jpg'
        },
        {
            id:'2',
            imgPath:'/GroceryImg/ban2.jpg'
        },
        {
            id:'3',
            imgPath:'/GroceryImg/ban3.jpg'
        }
    ]
    return(
        <>
        <Carousel>
       
            { 
              
                images.map((item,i) => <Item key={i} img={item} />
                )
            }
            
        </Carousel>   
        </>
    )
}
export default Home;