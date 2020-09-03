import React, { Component } from "react";

import { 
  Container,
  Row,
} from "react-bootstrap";

class Filmography extends Component {
  constructor(props){
    super(props)
    this.state = {
        movieItems: this.props.movieItems,
    }
  }

  render() {
     
    return (
        <Container> 
            <h2>Filmography</h2>
            <p>Here it is the list of Ghibli Movies:</p>
            <Row>
                    {this.props.movieItems}
            </Row>
        </Container>
    );
  }
}
 
export default Filmography;