import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";



interface CardComponentProps {
    title: string;
    text: string;
    component?: Component;
}

interface CardComponentState {
}

export default class CardComponent extends Component<CardComponentProps, CardComponentState> {
    render() {
        return <Container>
            <Card>
                <Card.Img variant="top">
                    {this.props.component}
                </Card.Img>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    }
}