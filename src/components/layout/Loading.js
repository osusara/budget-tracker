import React from 'react'
import { Spinner, Container, Row, Col } from "react-bootstrap"

const Loading = () => (
  <Container className="mx-auto py-2 px-2">
    <Row>
      <Col md={4} className="mx-auto">
        <div className="text-center">
          <Spinner animation="border" variant="dark" />
        </div>
        <h4 className="text-center">Please wait</h4>
      </Col>
    </Row>
  </Container>
);

export default Loading
