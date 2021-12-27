import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";



interface CardComponentProps {
    title: string;
    text: string;
    component?: Component;
}

interface CardComponentState {
}

export default class CardComponent extends Component {
    render() {
        return <Container>
            <Card>
                <Card.Body>
                    <Card.Title>Titre</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius illo fugit corrupti voluptatem dolorem autem, sequi cumque nemo minima voluptatum blanditiis nisi, ad consectetur commodi earum sapiente. In, doloremque possimus.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    }
}