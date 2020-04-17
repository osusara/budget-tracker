import React, { Component } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

class Balance extends Component {
  render() {
    return (
      <Container className="text-center mx-auto py-2">
        <Card className="shadow-sm balance-container">
          <Card.Body>
            <Row>
              <Col md={4} className="mx-auto">
                <Card className="mx-auto my-2 balance-card balance-main-card">
                  <Card.Body>
                    <Card.Title>Balance Left</Card.Title>
                    <h1>{Number(this.props.total).toFixed(2)}</h1>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} className="mx-auto my-auto">
                <Card className="mx-auto my-2 balance-card balance-income-card">
                  <Card.Body>
                    <Card.Title class="text-secondary">Income</Card.Title>
                    <h2 style={{ color: "#2cb978" }}>
                      {Number(this.props.income).toFixed(2)}
                    </h2>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} className="mx-auto my-auto">
                <Card className="mx-auto my-2 balance-card balance-expenses-card">
                  <Card.Body>
                    <Card.Title class="text-secondary">Expenses</Card.Title>
                    <h2 style={{ color: "#ea5455" }}>
                      {Number(this.props.expenses).toFixed(2)}
                    </h2>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Balance;
