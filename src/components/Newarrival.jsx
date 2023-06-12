import React from "react";
import "./Newarrival.css";
import na1 from "../assets/na1.png";
import card22 from "../assets/card22.png";
import card23 from "../assets/card23.png";
import card24 from "../assets/card24.png";
import xyz from "../assets/xyz.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/card";

export default function Newarrival() {
  return (
    <div>
      <div className="newArrival_container">
        <center>
          <h1>NEW ARRIVAL</h1>
          <p>Latest Collection</p>
        </center>
      </div>

      <div className="newArrival_card">
        <Card style={{ width: "16.5rem" }}>
          <Card.Img variant="top" src={na1} />
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
          <Card.Img variant="top" src={card22} />
          <Card.Body>
            <Card.Text>
              Violet Organza Silk Saree With Beautiful Pallu
            </Card.Text>
            <Card.Title>rs.1999</Card.Title>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </div>
      <div>
        <center>
          <button className="viewAll">View All</button>
        </center>
      </div>

      <div>
        <img src={xyz} alt="" />
      </div>
    </div>
  );
}
