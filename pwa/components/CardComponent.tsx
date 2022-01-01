import React, {Component} from "react";
import {Card, Container} from "react-bootstrap";


interface CardComponentProps {
  title: string;
  text: string;
  component?: any;
}

interface CardComponentState {
}

export default class CardComponent extends Component<CardComponentProps, CardComponentState> {
  render() {
    return <Container className="pt-12">
      <Card>
        <Card.Body>
          <div className="card-title h2 font-weight-bold" style={{color:"indianred"}} >{this.props.title}</div>
          <div className="pb-3">
            {this.props.component}
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
        </Card.Body>
      </Card>
    </Container>
  }
}
