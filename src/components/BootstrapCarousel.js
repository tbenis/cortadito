import React from "react";
import { Carousel } from "react-bootstrap"
import Button from 'react-bootstrap/Button';


export default function BootstrapCarousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style ={{height: 500}}
            src="https://i.pinimg.com/736x/4e/09/15/4e09157b1c5d2d365c0e87ec4e7b7f9e.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Mental Health</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Button variant="outline-light">Learn More</Button>{' '}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style ={{height: 500}}
            src="https://www.solidbackgrounds.com/images/5120x2880/5120x2880-cafe-au-lait-solid-color-background.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Immigration Lawyers </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button variant="outline-light">Learn More</Button>{' '}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style ={{height: 500}}
            src="https://www.solidbackgrounds.com/images/950x350/950x350-coffee-solid-color-background.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Community</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <Button variant="outline-light">Learn More</Button>{' '}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

