// src/App.js
import React from "react";
import { Card, Container } from "react-bootstrap";

import Price from "./components/Price";

import Description from "./components/Description";

import Name from "./components/Name";
import Image from "./components/Image";
import product from "./product";

function App() {
  const { name, price, description, image } = product;

  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{price}</Card.Text>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
      <p>Hello, {name ? name : "there !"}</p>
      {name && <img src={image} alt={name} />}
    </Container>
  );
}

export default App;
