import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xs="12" md="3">
            <h5 className="footer-title">EchoGuard</h5>
            <p className="footer-text">EchoGuard: Protegendo o Futuro, Preservando o Presente!</p>
            <p className="footer-copy">© EchoGuard PTY LTD 2024. All rights reserved</p>
          </Col>
          <Col xs="6" md="2">
            <h6 className="footer-heading">Company</h6>
            <ul className="footer-list">
              <li>Home</li>
              <li>About us</li>
              <li>Newsletter</li>
            </ul>
          </Col>
          <Col xs="6" md="2">
            <h6 className="footer-heading">Region</h6>
            <ul className="footer-list">
              <li>Amazonia</li>
              <li>Pará</li>
              <li>Rondonia</li>
              <li>Mato Grosso</li>
            </ul>
          </Col>
          <Col xs="6" md="2">
            <h6 className="footer-heading">Help</h6>
            <ul className="footer-list">
              <li>Help center</li>
              <li>Contact support</li>
              <li>Guia do Site</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
