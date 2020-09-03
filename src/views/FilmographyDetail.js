import React, { Component } from "react";

import { 
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

class Filmography extends Component {
  constructor(props){
    super(props)
    this.state = {
        selectedMovie: this.props.selectedMovie,
    }
    
  }

  render() {
    console.log(this.props.selectedMovie)
    return (
        <Container>
            <h2 className="title-page">Filmography Detail</h2>
            <Row>
                <Col lg="2" md="2" sm="0" xs="0"></Col>
                <Col lg="8" md="8" sm="12" xs="12" className="detail-movie">
                    <Card>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>{this.state.selectedMovie.title}</Card.Title>
                        <Card.Subtitle>
                        <FontAwesomeIcon style={{color: "#FFDF00"}} icon={faStar} /> 
                        <div className="d-inline-flex ml-1">
                            <p><b>Rating score :</b>{this.state.selectedMovie.rt_score}</p>
                        </div>
                        </Card.Subtitle>
                        <Card.Text>
                            <p><b>Director: </b>{this.state.selectedMovie.director}</p>
                            <p><b>Producer: </b>{this.state.selectedMovie.producer}</p>
                            <p><b>Release date: </b>{this.state.selectedMovie.release_date}</p>
                            <p><b>Description: </b>{this.state.selectedMovie.description}</p>
                        </Card.Text>
                        
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col lg="2" md="2" sm="0" xs="0"></Col>
            </Row>
        </Container> 
            
    );
  }
}
 
export default Filmography;