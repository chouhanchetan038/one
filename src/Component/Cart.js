import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { add } from '../Readux/Slice';


const Cart = () => {

  const dis = useDispatch();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
     .then((response) => {
        console.log(response.data);
        setProduct(response.data);
      })
     .catch((error) => {
        console.error(error);
      });
  }, []);
  

  return (
    <Container>
      <Row>
        {product.map((item) => (
          <Col md={3} className='d-flex mb-5' key={item.id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.description}
                </Card.Text>
                <Button variant="primary" >Add To Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cart;