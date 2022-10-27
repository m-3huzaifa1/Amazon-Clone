import React from "react";
import logo from '../Images/amazon-logo.png';

export default function Footer() {
    return(
       <div>
        <button className="ft">Back to Top</button>
        <div className="ft1">
        
        <div className="row" style={{fontSize:30}}>
             <div className="col-12 col-sm-6 col-md-3">
                <h1>Get To Know Us</h1>
                Careers<br/>
                Blog<br/>
                About Amazon<br/>
                Investor Relations<br/>
                Amazon Devices<br/>
                Amazon Science<br/>
             </div>
             <div className="col-12 col-sm-6 col-md-3">
                <h1>Make Money With Us</h1>
               Sell products on Amazon<br/>
               Sell on Amazon Business<br/>
               Sell apps on Amazon<br/>
               Become an Affiliate<br/>
               Advertise Your Products<br/>
               Self-Publish with Us<br/>
               Host an Amazon Hub<br/>
›              See More Make Money with Us<br/>
               Amazon Payment Products<br/>

             </div>
             <div className="col-12 col-sm-6 col-md-3">
                <h1>Amazon Payment Products</h1>
                Amazon Business Card<br/>
                Shop with Points<br/>
                Reload Your Balance<br/>
                Amazon Currency Converter<br/>
             </div>
             <div className="col-12 col-sm-6 col-md-3">
                <h1>Let Us Help You</h1>
                Amazon and COVID-19<br/>
                Your Account<br/>
                Your Orders<br/>
                Shipping Rates & Policies<br/>
                Returns & Replacements<br/>
                Manage Your Content and Devices<br/>
                Amazon Assistant<br/>
                Help<br/>

             </div>
              
        </div><br/><br/><br/><br/>
        <hr/>
        <div className="ft2">
        <img src={logo} height='60' width='200' alt=''/>
        <select id="slct">
            <option>English</option>
        </select>
        </div>
        </div>
        <div className="row ft3" style={{fontSize:27}}>
            <div className="col">
            <div className="d-flex justify-content-center"><span style={{marginRight:50}}>Conditions of Use </span>  <span style={{marginRight:50}}>Privacy Content</span> <span>Interests-Based Ads</span></div>
            <div className="d-flex justify-content-center"><span>&copy; 1999-2022,Amazon.com, Inc. or its affiliates</span></div>
            </div>
        </div>
       </div>
    );
}