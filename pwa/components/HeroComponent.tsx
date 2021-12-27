import React, { Component } from "react";
import { Container } from "react-bootstrap";


export default class HeroComponent extends Component {
    render() {
        return <div className="jumbotron ">
        <Container className="my-5 pt-5">
            <h1 className="display-4">Titre</h1>
            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, eligendi. Velit voluptate hic suscipit recusandae voluptatum atque dolores facere quam non rem fugit neque unde iusto, repellendus quas corporis porro.</p>
        </Container>
    </div>
    }
}