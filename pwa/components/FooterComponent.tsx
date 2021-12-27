import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
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
                <Row>
                    <Col><p>test</p></Col>
                    <Col><p>test</p></Col>
                    <Col><p>test</p></Col>
                    <Col><p>test</p></Col>
                    <Col><p>test</p></Col>
                    <Col><p>test</p></Col>
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



