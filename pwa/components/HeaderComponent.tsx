import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import LogoComponent from "./LogoComponent";

export default class HeaderComponent extends Component {
    render() {
        return <div className="header shadow">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
                <Container>
                    <Navbar.Brand href="#Hero">
                        <LogoComponent />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#PrixMetreCarre">Prix Moyen du m²</Nav.Link>
                            <Nav.Link href="#NbVentes">Nombre de vente</Nav.Link>
                            <Nav.Link href="#VentesParRegion">Ventes par Région</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    }
}