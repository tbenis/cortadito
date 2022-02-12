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
            style={{ height: 500 }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEvsOfweTZ13-21tBnLNSSIjR87RSu825b5w&usqp=CAU"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Mental Health</h3>
            <p>
              Approximately 34% of Hispanic/Latinx adults with mental illness
              receive treatment each year compared to the U.S. average of 45%.
              This is due to many unique barriers to care. Are you a Miami-Dade
              Latinx resident and need resources for mental health?
            </p>
            <Button variant="outline-light">Click Here to Learn More</Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: 500 }}
            src="https://morrowlawfirm.net/wp-content/uploads/2017/09/immigration_law_banner.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Immigration Lawyers </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button variant="outline-light">Learn More</Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: 500 }}
            src="https://tinyurl.com/5ffdfrp4"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Community</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <Button variant="outline-light">Learn More</Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

