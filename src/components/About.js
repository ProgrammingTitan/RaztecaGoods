import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import NavBar from './NavBar';
import Footer from './Footer';

const About = (props) => {
  return (
    <div>
        <NavBar/>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Razteca Goods</h1>
          <p className="lead">Razteca Goods is a small business based out of Long Beach, CA. Our sole 
          purpose here is to manufacture and distribute high quality products to our supporters. We specialize
          in tech-related goods but also like to create items designed for children.</p>
        </Container>
      </Jumbotron>
      <Footer />
    </div>
  );
};

export default About;