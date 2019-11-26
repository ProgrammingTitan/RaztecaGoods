import React from 'react';
import Card from './Card';
import {Row , Col, Container} from 'reactstrap';

const Products = () => {

  return (
    <Container>
        <Row><p></p></Row>
      <Row>
        <Col xs="6">
      <Card 
      src = "https://images-na.ssl-images-amazon.com/images/I/71CfyL3GjEL._SL1500_.jpg"
      title="Mini Stapler Set" 
      description1 = "Cute 2-Pack of Mini Staplers!"     
      link = "https://www.amazon.com/dp/B07X8L5BQT?ref=myi_title_dp"
      />
      </Col>
      <Col xs="6">
      <Card 
      src = "https://images-na.ssl-images-amazon.com/images/I/91zIVIrlH1L._SL1500_.jpg"
      title="Spiderman/Ironman Avengers Sequin Pillowcase" 
      description1 = "Cute 2-Pack of Mini Staplers!"     
      link = "https://www.amazon.com/Razteca-Goods-Sequin-Superhero-Pillowcase/dp/B07WRSP3ZB/ref=sr_1_1?keywords=Razteca+Goods&qid=1574791317&sr=8-1"
      />
      </Col>
      </Row>
      <Row><p></p></Row>
      <Row>
        <Col xs="6">
      <Card 
      src = "https://images-na.ssl-images-amazon.com/images/I/61%2BiZkxFwSL._SL1500_.jpg"
      title="3-Pack USB-A to USB-C Adapters" 
      description1 = "Cute 2-Pack of Mini Staplers!"     
      link = "https://www.amazon.com/dp/B07SD34KJJ?ref=myi_title_dp" 
      />
      </Col>
      <Col xs="6">
      <Card 
      src = "https://images-na.ssl-images-amazon.com/images/I/719OyI9uncL._SL1500_.jpg"
      title="Wireless Gaming Mouse" 
      description1 = "Cute 2-Pack of Mini Staplers!"     
      link = "https://www.amazon.com/dp/B07MF2SNXN?ref=myi_title_dp"
      />
      </Col>
      </Row>
      <Row><p></p></Row>
      <Row>
      <Col xs="3"> </Col>
      <Col xs="6">
      <Card 
      src = "https://images-na.ssl-images-amazon.com/images/I/71WU4cfQdXL._SL1500_.jpg"
      title="Razteca Wireless Phone Charger" 
      description1 = "Cute 2-Pack of Mini Staplers!"     
      link = "https://www.amazon.com/dp/B07MDQ32RJ?ref=myi_title_dp"
      />
      </Col>
      <Col xs="3"> </Col>
      </Row>
    </Container>
  );
}

export default Products;
