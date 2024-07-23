import React from 'react';
import Container from '@mui/material/Container';
import {Box , Button} from '@mui/material';
function Orange() {
    return(
        <>
            <Container maxWidth="lg">
            <Box>
            <div className='Orange'>
                <div>
                    <div className='discount' style={{color:"#fff", backgroundColor:"#febd2f"}}>
                        <h6 >Daily Discounts</h6>
                    </div>
                    <div className='banCntHead'>
                        <h2>Fruits & Vegetables</h2>
                    </div>
                    <div className='banCntPara'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <Button style={{color:"#fff", backgroundColor:"#febd2f", width:"35%"}}><b>Show Products</b></Button>
                </div>
                <div className='orangeEffect'>
                   <a href='#'> <img src='./GroceryImg/orange.png'/></a>
                </div>
            </div>
            </Box>
            </Container>
        </>
    )
}
export default Orange;
