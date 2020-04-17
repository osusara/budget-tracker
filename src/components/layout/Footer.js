import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <Container fluid={true} className="footer-container py-4 px-4">
        <Row>
          <Col md={3} xs={10} className="mx-auto mx-4">
            <p>
              <h5>About Budget Tracker</h5>
              This application helps you to keep track of your daily expenses.
              You can insert incomes and expenses here. Budget Tracker shows the
              balance and all the information about your transactions.
            </p>
          </Col>
          <Col md={3} xs={10} className="mx-auto mx-4">
            <p>
              <h5>Source code</h5>
              <Button
                href="https://github.com/osusara/budget-tracker"
                target="_blank"
                className="btn-footer my-2"
              >
                <i className="fab fa-github"></i> Repository
              </Button>
              <br />
              Find the <i className="fas fa-code"></i> of this project here. If
              you find any issue, feel free to point them and create pull
              requests. Also don't forget to give a{" "}
              <i className="fas fa-star"></i>
            </p>
          </Col>
          <Col md={3} xs={10} className="mx-auto mx-4">
            <p>
              <h5>Find me on</h5>
              <Button
                href="https://linkedin.com/in/osusara"
                target="_blank"
                className="btn-footer mr-2 mt-2"
              >
                <i className="fab fa-linkedin"></i>
              </Button>
              <Button
                href="https://facebook.com/osusara"
                target="_blank"
                className="btn-footer mr-2 mt-2"
              >
                <i className="fab fa-facebook"></i>
              </Button>
              <Button
                href="https://twitter.com/kammalawatta"
                target="_blank"
                className="btn-footer mr-2 mt-2"
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <Button
                href="https://instagram.com/osusara.kammalawatta"
                target="_blank"
                className="btn-footer mr-2 mt-2"
              >
                <i className="fab fa-instagram"></i>
              </Button>
              <Button
                href="https://youtube.com/osusarakammalawatta"
                target="_blank"
                className="btn-footer mr-2 mt-2"
              >
                <i className="fab fa-youtube"></i>
              </Button>
            </p>
            <p>
              and, my personal web
              <br />
              <Button
                href="https://osusara.github.io"
                target="_blank"
                className="btn-footer mr-2 mt-2"
              >
                <i className="fas fa-globe"></i> osusara
              </Button>
            </p>
          </Col>
        </Row>
        <hr />
        <p className="text-center">Osusara Kammalawatta | 2020</p>
      </Container>
    );
  }
}

export default Footer;
