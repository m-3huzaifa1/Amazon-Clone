import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Images/carousel1.jpg';
import img3 from '../Images/carousel3.jpg';
import { product } from "../db";
import {Card,CardBody, CardFooter, CardTitle} from 'reactstrap';

export default function CarouselProduct() {
    return(
  <React.Fragment>
    <Carousel >
      
      <Carousel.Item className="ci">
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
    
        <Carousel.Caption>
        <div className="hdln">
            <p>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery.<a href="">Click here to go to amazon.in</a></p> 
        </div>
        
        <div className="row pt-5">
          
            {product.l1.map((item)=>{
              return(
                <div className="col-6 col-md-3">
                <Card style={{height:"500px",color:'black',padding:'30px'}}>
                    <CardTitle>
                    <h3>{item.name}</h3>
                    </CardTitle>
                    <CardBody>
                    <img src={item.image} alt=""/>
                    <br/>
                    </CardBody>
                    <CardFooter>
                      <a href="" >Shop for Now</a>
                    </CardFooter>
                </Card>
                </div>)
            })}
          </div>

          <div className="row pt-5">
        {product.l2.map((item)=>{
              return(
                <div className="col-6 col-md-3">
                <Card style={{height:"500px",color:'black',padding:'30px'}}>
                    <CardTitle>
                    <h3>{item.name}</h3>
                    </CardTitle>
                    <CardBody>
                    <img src={item.image} alt=""/>
                    <br/>
                    
                    </CardBody>
                    <CardFooter>
                      <a href="" >Shop Now</a>
                    </CardFooter>
                </Card>
            </div>)
            })}
        </div>

        </Carousel.Caption>
      </Carousel.Item >
      
      <Carousel.Item className="ci">
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
        <div className="hdln">
            <p>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery.<a href="">Click here to go to amazon.in</a></p> 
        </div>
      
        <div className="row pt-5">
        {product.l1.map((item)=>{
              return(
                <div className="col-6 col-md-3">
                <Card style={{height:"500px",color:'black',padding:'30px'}}>
                    <CardTitle>
                    <h3>{item.name}</h3>
                    </CardTitle>
                    <CardBody>
                    <img src={item.image} alt=""/>
                    <br/>
                    
                    </CardBody>
                    <CardFooter>
                      <a href="" >Shop Now</a>
                    </CardFooter>
                </Card>
            </div>)
            })}

        </div>

        <div className="row pt-5">
        {product.l2.map((item)=>{
              return(
                <div className="col-6 col-md-3">
                <Card style={{height:"500px",color:'black',padding:'30px'}}>
                    <CardTitle>
                    <h3>{item.name}</h3>
                    </CardTitle>
                    <CardBody>
                    <img src={item.image} alt=""/>
                    <br/>
                    
                    </CardBody>
                    <CardFooter>
                      <a href="" >Shop Now</a>
                    </CardFooter>
                </Card>
            </div>)
            })}
        </div>

        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
        </React.Fragment>
    );
}