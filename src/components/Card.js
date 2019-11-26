
import React from 'react';
import { Card, Button, CardTitle, CardText, CardBody, CardImg} from 'reactstrap';
import './../App.css'

const ProductCard = (props) => {
  return (
      <Card color = "light">
        <CardImg top height="350px" width="100%" src={props.src} alt="Product Image" />
        <CardBody>
          <CardTitle align="center">{props.title}</CardTitle>
          <CardText >{props.description}</CardText>
          <Button href={props.link} outline color="secondary" block>Shop Now</Button>{' '}
        </CardBody>
      </Card>
  );
};

export default ProductCard;