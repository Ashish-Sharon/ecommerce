import React from "react";
import "./Celebrity.css";
import card21 from "../assets/card21.png";
import card22 from "../assets/card22.png";
import card23 from "../assets/card23.png";
import card24 from "../assets/card24.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/card";

export default function Celebrity() {
  return (
    <div>
      <div className="celebrity_container">
        <center>
          <h1>CELEBRITY STYLE</h1>
          <p>Bahuji's Celebrity collection</p>
        </center>
      </div>

      <div className="celebrity_card">
        <Card style={{ width: "16.5rem" }}>
          <Card.Img variant="top" src={card21} />
          <Card.Body>
            
            <Card.Text>
              Violet Organza Silk Saree With Beautiful Pallu
            </Card.Text>
            <Card.Title>rs.1999</Card.Title>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card> 
        <Card style={{ width: "16.5rem" }}>
          <Card.Img variant="top" src={card22} />
          <Card.Body>
            
            <Card.Text>
              Violet Organza Silk Saree With Beautiful Pallu
            </Card.Text>
            <Card.Title>rs.1999</Card.Title>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
        <Card style={{ width: "16.5rem" }}>
          <Card.Img variant="top" src={card23} />
          <Card.Body>
            
            <Card.Text>
              Violet Organza Silk Saree With Beautiful Pallu
            </Card.Text>
            <Card.Title>rs.1999</Card.Title>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
        <Card style={{ width: "16.5rem" }}>
          <Card.Img variant="top" src={card24} />
          <Card.Body>
            
            <Card.Text>
              Violet Organza Silk Saree With Beautiful Pallu
            </Card.Text>
            <Card.Title>rs.1999</Card.Title>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
