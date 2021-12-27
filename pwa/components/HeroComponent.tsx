import React, { Component } from "react";
import { Container } from "react-bootstrap";



interface HeroComponentProps {
    title: string;
    text: string;
}

interface HeroComponentState {
}

export default class HeroComponent extends Component<HeroComponentProps, HeroComponentState> {
    render() {
        return <div className="jumbotron ">
            <Container className="my-5 pt-5">
                <h1 className="display-4">{this.props.title}</h1>
                <p className="lead">{this.props.text}</p>        
            </Container>
        </div>
    }
}