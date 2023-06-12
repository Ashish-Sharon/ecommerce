import React from "react";
import carousel1 from "../assets/carousel  (1).png";
import carousel2 from "../assets/carousel  (2).png";
import carousel3 from "../assets/carousel  (3).png";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import card5 from "../assets/card5.png";
import card6 from "../assets/card6.png";
import "./Carousel.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/card";

export default function Carousel() {
  return (
    <div className="wholeBody">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={carousel1} class="d-block w-100" />
          </div>
          <div class="carousel-item">
            <img src={carousel2} class="d-block w-100" />
          </div>
          <div class="carousel-item">
            <img src={carousel3} class="d-block w-100" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <div className="bahuji_collection">
        <center>
          <h1>BAHUJI COLLECTIONS</h1>
        </center>
      </div>
      <div className="allCards">
        {/* <div class="card">
          <img src={card1} className="imgBorder" />
          <div class="container">
            <center>
              <p>ALL SAREE</p>{" "}
            </center>
          </div>
        </div>

        <div class="card">
          <img src={card2} className="imgBorder" />
          <div class="container">
            <center>
              <p>BANARASI SAREE</p>{" "}
            </center>
          </div>
        </div>

        <div class="card">
          <img src={card3} className="imgBorder" />
          <div class="container">
            <center>
              <p>KANJIVARAM SAREE</p>{" "}
            </center>
          </div>
        </div>

        <div class="card">
          <img src={card4} className="imgBorder" />
          <div class="container">
            <center>
              <p>PURE SILK</p>{" "}
            </center>
          </div>
        </div>

        <div class="card">
          <img src={card5} className="imgBorder" />
          <div class="container">
            <center>
              <p>NEW ARRIVAL</p>{" "}
            </center>
          </div>
        </div>

        <div class="card">
          <img src={card6} className="imgBorder" />
          <div class="container">
            <center>
              <p>COTTON SAREE</p>{" "}
            </center>
          </div>
        </div> */}

        <Card style={{ width: "16.5rem" }}>
          <Card.Img variant="top" src={card1} />
          <Card.Body>
            <Card.Title>ALL SAREE</Card.Title>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>

        <Card style={{ width: "16.5rem" }}>
          <Card.Img variant="top" src={card2} />
          <Card.Body>
            <Card.Title>BANARASI SAREE</Card.Title>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>

        <Card style={{ width: "16.5rem" }}>
          <Card.Img variant="top" src={card3} />
          <Card.Body>
            <Card.Title>KANJIVARAM SAREE</Card.Title>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>

        <Card style={{ width: "16.5rem" }}>
          <Card.Img variant="top" src={card4} />
          <Card.Body>
            <Card.Title>PURE SILK</Card.Title>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>

        <Card style={{ width: "16.5rem" }}>
          <Card.Img variant="top" src={card5} />
          <Card.Body>
            <Card.Title>NEW ARRIVAL</Card.Title>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>

        <Card style={{ width: "16.5rem" }}>
          <Card.Img variant="top" src={card6} />
          <Card.Body>
            <Card.Title>COTTON SAREE</Card.Title>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
