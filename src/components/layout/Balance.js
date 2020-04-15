import React, { Component } from "react";
import { Container, Card, Row, Col } from "react-bootstrap"

class Balance extends Component {
  render() {
    return (
      <Container className="text-center mx-auto py-2">
        <Row>
          <Col md={4} className="mx-auto">
            <Card className="card mx-auto shadow-sm balance-card">
              <Card.Body>
                <Card.Title>Balance Left</Card.Title>
                <h1>
                  {Number(this.props.total).toFixed(2)}
                </h1>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Balance