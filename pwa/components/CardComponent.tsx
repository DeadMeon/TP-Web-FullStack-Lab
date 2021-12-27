import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";



interface CardComponentProps {
    title: string;
    text: string;
    component?: any;
}

interface CardComponentState {
}

export default class CardComponent extends Component<CardComponentProps, CardComponentState> {
    render() {
        return <Container className="pt-4">
            <Card>
                <Card.Body>
                    <div className="pb-3">
                        {this.props.component}
                    </div>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    }
}