import React, { Fragment, useState } from "react";
import { NavLink} from 'react-router-dom';
import logo from '../Images/amazon-logo.png';
import cart from '../Images/cart-fill.svg';

export default function Header() {
const [cartCount,setCartCount]=useState(0);
    return(
           <div>  
            
    <nav className="navbar navbar-expand navigation" id="navigation">
        <div className="container m-3">
            
	
            <a className="navbar-brand  mr-auto mt-3"  href=""><img src={logo} height='70' width='190' alt=''/></a>
            <div className="col-10" style={{marginLeft:200}}>
                        <input className="input" style={{height:'60px',width: '90%',border:'1px solid black'}}/>
                        <button className="srch"><span className="fa fa-search"></span></button>
            </div>

	        <ul className="navbar-nav mr-auto " >
	            <li className="nav-item "><NavLink to={'/'} style={{color:'white',textDecoration:'none',marginRight:300}}>  <h5>Hello User</h5>
                         <h2>Sign Out</h2></NavLink></li>
                <li className="nav-item"><NavLink to={'#'} style={{color:'white',textDecoration:'none',marginRight:300}}>  <h5>Return &</h5>
                         <h2>Orders</h2></NavLink></li>
                <li className="nav-item"><NavLink to={'#'} style={{color:'white',textDecoration:'none',marginRight:300}}>  <h5>Your</h5>
                         <h2>Prime </h2></NavLink></li>
                <li className="nav-item d-flex align-items-center"><NavLink to={'#'} style={{color:'white',textDecoration:'none'}}>  
                <img src={cart} style={{marginRight:'10px'}} alt=''/>  
                </NavLink></li><span style={{fontSize:'50px'}}>{cartCount}</span>         
	        </ul>
        
        </div>
    </nav>
    
    <div className="row hd" >
        <div className="col-1">
           <h3><span className="fa fa-bars"></span>  All</h3>
        </div>
        <div className="col-1">
           <h3>Today's Deals</h3>
        </div>
        <div className="col-2">
           <h3>Customer Service</h3>
        </div>
        <div className="col-1">
           <h3>Gift Cards</h3>
        </div>
        <div className="col-1">
           <h3>Registry</h3>
        </div>
        <div className="col-1">
           <h3>Sell</h3>
        </div>
    </div>
                       
            </div>
    );
}