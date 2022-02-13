import React from "react";
import { Carousel } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';

export default function BootstrapCarousel() {
  let navigate = useNavigate();
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: 500 }}
            src="https://i2.wp.com/healinghopecounselingaz.com/wp-content/uploads/2018/05/mental-banner.png?fit=1200%2C360&ssl=1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Mental Health</h3>
            <p>
              Approximately 34% of Latinx adults with mental illness
              receive treatment each year compared to the U.S. average of 45%.
              This is due to many unique barriers to care. Are you a Miami-Dade
              Latinx resident and need resources for mental health?
            </p>
            <Button onClick={() => navigate("/mental-health")} variant="light">Learn More</Button>{" "}
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
            <p>With the ever-growing Latinx population in Miami, it is no surprise that there is need for immigration services. Are you looking for help with immigration services? Click below </p>
            <Button onClick={() => navigate("/legal")} variant="light">Learn More</Button>{" "}
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
              Cortadito is introducing a new way to connect with the community in Miami. Click below to view our wonderful volunteer hosts who will willing you take youu in for a day and share parts of their culuture with you (Food, clothes, traditions etc)
            </p>
            <Button onClick={() => navigate("/community")} variant="light">Learn More</Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

