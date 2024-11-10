import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Cart from './Component/Cart'
import Header from './Component/Header'
import { Route, Routes } from 'react-router-dom'
import Product from './Component/Product'
import Footer from './Component/Footer'





function App() {
  return (
    <>
  <Container fluid>
    <Row>
      <Col md={12}>
        <Header/>
        <hr/>
        <Routes>
          <Route path="/cart" element={<Cart/>}>Cart</Route>
          <Route path='/product' element={<Product/>}>Product</Route>
          
        </Routes>
        
      </Col>
    </Row>
    <Footer/>
  </Container>
    </>
  )
}

export default App