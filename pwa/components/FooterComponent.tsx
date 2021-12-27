import React, { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import LogoComponent from "./LogoComponent";




export default class FooterComponent extends Component {
    render() {
        return <div className="jumbotron mb-0 mt-4">
            <Container className="pt-5 justify-content-center text-center">
                <Row>
                    <Col className="mb-5">
                        <LogoComponent />
                    </Col>
                </Row>
                <Row className="my-5">
                    <Col><Button variant="outline-dark">About</Button></Col>
                    <Col><Button variant="outline-dark">Services</Button></Col>
                    <Col><Button variant="outline-dark">Press</Button></Col>
                    <Col><Button variant="outline-dark">Careers</Button></Col>
                    <Col><Button variant="outline-dark">FAQ</Button></Col>
                    <Col><Button variant="outline-dark">Legal</Button></Col>
                    <Col><Button variant="outline-dark">Contact</Button></Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <p className="copyright">
                            <small>
                                Richard PLANCHON, Aziz M'HIRSI, Souhail KACIMI, & Gwénolé PAUGAM<br />
                                All Rights Reserved.
                            </small>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    }
}



