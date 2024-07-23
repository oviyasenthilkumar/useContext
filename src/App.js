import Home from './Grocery/Home';
import './Grocery/Grocery.css';
import Navbar from './Grocery/Navbar';
import CarouselPg from './Grocery/CarouselPg';
import Orange from './Grocery/Orange';
import Discount from './Grocery/Discount';
import AllProducts from './Grocery/AllProducts';
import Dates from './Grocery/Dates';
import Veg from './Grocery/Veg';
import Cake from './Grocery/Cake';
import Fruit from './Grocery/Fruit';
import Puff from './Grocery/Puff';
import Herbs from './Grocery/Herbs';
import { useState } from 'react';
import { NavContext } from './Grocery/NavContext';
import { Login } from './Grocery/Login';

function App() {
  // const [products] = TotalItems;
  const [cart,setCart] = useState(0)
  const [currentPage,setCurrentPage]=useState('home');
  const navigateTo = (page)=>{
    setCurrentPage(page);
  }
  const increment = ()=>{ 
    setCart(cart+1) 
  }
   
  const [page,setPage]=useState(false)
const decrement= ()=>{
  if(cart>0) { setCart(cart-1)}
}
  return (
  <NavContext.Provider value={{currentPage,setCurrentPage,cart,setCart,setPage}}>
    {page?(currentPage === 'home' && [<Navbar/>,<Home/>,<CarouselPg/>,<Orange/>,<Discount increment={increment} decrement={decrement}/>]): <Login/>}
    {currentPage === 'allProduct' && [<Navbar/>,<AllProducts increment={increment} decrement={decrement} />]}
    {currentPage === 'dates' && [<Navbar/>,<Dates increment={increment} decrement={decrement}/>]}
    {currentPage === 'fruits' && [<Navbar/>,<Fruit increment={increment} decrement={decrement}/>]}
    {currentPage === 'veg' && [<Navbar/>,<Veg increment={increment} decrement={decrement}/>]}
    {currentPage === 'cakes' && [<Navbar/>,<Cake increment={increment} decrement={decrement}/>]}
    {currentPage === 'herb' && [<Navbar/>,<Herbs increment={increment} decrement={decrement}/>]}
    {currentPage === 'puff' && [<Navbar/>,<Puff increment={increment} decrement={decrement}/>]}
    {currentPage === 'plant' && [<Navbar/>,<Herbs increment={increment} decrement={decrement}/>]}
  </NavContext.Provider>

     
   
  );
}

export default App;
