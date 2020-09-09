import React, { Component } from "react";

import { 
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";

import { withRouter } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

class Filmography extends Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.history.push('/filmography');
  }

  render() {
    return (
        <Container className="detail-movie">
          <div className="arrow-back">
            <FontAwesomeIcon  onClick={this.handleClick} size="lg" icon={faArrowLeft} /> 
          </div>
            <h2 className="title-page">Filmography Detail</h2>
            <Row className="content-movie">
                <Col lg="1" md="1" sm="0" xs="0"></Col>
                <Col lg="4" md="4" sm="12" xs="12" >
                  <img variant="top" src={this.props.moviePoster} alt="Movie Poster"/>
                </Col>
                <Col lg="6" md="6" sm="12" xs="12" >
                  <Card>
                    <Card.Body>
                        <Card.Title>{this.props.selectedMovie.title}</Card.Title>
                        <Card.Text className="information">
                          <FontAwesomeIcon color="#FFDF00" icon={faStar} /> 
                          <span className="d-inline ml-1"><b>Rating score:  </b>{this.props.selectedMovie.rt_score}</span><br/>
                          <span><b>Director: </b>{this.props.selectedMovie.director}</span><br/>
                          <span><b>Producer: </b>{this.props.selectedMovie.producer}</span><br/>
                          <span><b>Release date: </b>{this.props.selectedMovie.release_date}</span><br/>
                          <span><b>Description: </b>{this.props.selectedMovie.description}</span><br/>
                        </Card.Text>
                        
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg="1" md="1" sm="0" xs="0"></Col>
            </Row>
        </Container> 
            
    );
  }
}
 
export default withRouter(Filmography);