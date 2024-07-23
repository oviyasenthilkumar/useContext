import React,{ useContext, useState }  from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InputBase from '@mui/material/InputBase';
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import Toolbar from '@mui/material/Toolbar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Container from '@mui/material/Container';

import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { NavContext } from './NavContext';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: '0%',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
 
function Navbar(){
  let {setCurrentPage,cart} = useContext(NavContext)
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleClick = (e)=>{
    setCurrentPage(e)
  }

    return(
        <>
            <AppBar position="fixed" className='Nav'>
            <Container maxWidth="xl" style={{padding:"15px 0"}}>
            <Toolbar>
            <Grid container spacing={2}>
              <ul className='AppBar'>
                <li> <Grid item xs={3} lg={4}>
                    <img src='/GroceryImg/logo.png'/>
                </Grid></li>
                <li>  <Grid xs={2} lg={12}>
                    <Search style={{width:"100%", marginRight:'10px'}}>
                        <SearchIconWrapper>
                        <SearchIcon style={{color:"#febd2f"}}/>
                        </SearchIconWrapper>
                        <StyledInputBase style={{width:"100%!important"}}
                        placeholder="Search Product "/>
                    </Search>
                </Grid></li>
                <li><Grid lg={12}>
                <ul className='list'>
                        <li>Monday - Friday : </li>
                        <li>8:00AM - 9:00 PM</li>
                    </ul>
                </Grid></li>
               
                <Grid className='Icons' >
                <li>            
                               <Badge badgeContent={1}style={{color:"#febd2f"}} className='NavIcon'>
                                    <PersonOutlineRoundedIcon className='NavIcon'/>
                                </Badge></li>
                                  <li> <Badge badgeContent={1}style={{color:"#febd2f"}} className='NavIcon'>
                                    <FavoriteBorderIcon className='NavIcon'/>
                                </Badge></li> 
                
                <li>
                                <Badge badgeContent={cart} style={{color:"#febd2f"}} >
                                 <b>$0.00 </b> <ShoppingCartIcon className='NavIcon'/>
                                </Badge>
                              
                </li>
                </Grid>
                </ul>
                <ul className='AppBar'>
                <li>
                <Grid>
                <Box  sx={{ minWidth:220}}>
               <FormControl fullWidth style={{backgroundColor:"#febd2f",borderRadius:"10px"}}> 
               <InputLabel style={{color:"inherit"}}> <img src='/GroceryImg/shop.png'/> Browse All Categories </InputLabel>
      <Select
      fullWidth
        labelId="dropdown-label"
        id="dropdown"
        value={selectedOption}
        onChange={handleChange}
        style={{color:"inherit"}}
      >
        <MenuItem value="All Products" onClick={ ()=> handleClick('allProduct')} style={{color:"#fff",paddingRight:"10px"}}> <img src='/GroceryImg/meat.png' style={{paddingRight:"10px"}}/> All Product</MenuItem>
        <MenuItem value="Date & Beans" onClick={ ()=> handleClick('dates')} style={{color:"#fff"}}> <img src='/GroceryImg/bread.png' style={{paddingRight:"10px"}}/> Date & Beans</MenuItem>
        <MenuItem value="Vegetable" onClick={ ()=> handleClick('veg')} style={{color:"#fff"}}> <img src='/GroceryImg/cheese.png' style={{paddingRight:"10px"}}/>Vegetable</MenuItem>
        <MenuItem value="Cake" onClick={ ()=> handleClick('cakes')} style={{color:"#fff"}}> <img src='/GroceryImg/tea.png' style={{paddingRight:"10px"}}/> Cake</MenuItem>
        <MenuItem value="Fruits" onClick={ ()=> handleClick('fruits')} style={{color:"#fff"}}> <img src='/GroceryImg/chocolate.png' style={{paddingRight:"10px"}}/> Fruits</MenuItem>
      </Select>
    </FormControl>
    </Box>
               </Grid>
                </li>
                <li>
                   
                <Grid lg={12}>
                 <div>
                 <span style={{color:"#febd2f"}}>-30% off </span>for first order with 200 USD in the cart. <a href='#' style={{color:"#febd2f"}}>Show more</a>
                 </div>
                </Grid>
                </li>
                <li>
                  <Grid lg={12} className='Questions'>
                    <h6>FAQ</h6>
                    <h6>About Us</h6>
                    <h6>Privacy Policy</h6>
                  </Grid>
                </li>
              </ul>
            
               
               
               
                

              
              
                </Grid>
             
          </Toolbar>
          </Container>
            </AppBar>

        </>
    )
}
export default Navbar;