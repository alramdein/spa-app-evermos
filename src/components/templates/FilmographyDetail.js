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

    this.backToFilmographyList = this.backToFilmographyList.bind(this)
  }

  backToFilmographyList() {
    this.props.history.push('/filmography');
  }

  render() {
    try {
      return (
        <Container className="detail-movie">
          <div className="arrow-back">
            <FontAwesomeIcon  onClick={this.backToFilmographyList} size="lg" icon={faArrowLeft} /> 
          </div>
            <h2 className="title-page">Filmography Detail</h2>
            <Row className="content-movie">
                <Col lg="1" md="1" sm="0" xs="0"></Col>
                <Col lg="4" md="4" sm="12" xs="12" >
                  <img variant="top" src={this.props.location.moviePoster} alt="Movie Poster"/>
                </Col>
                <Col lg="6" md="6" sm="12" xs="12" >
                  <Card>
                    <Card.Body>
                        <Card.Title>{this.props.location.movie.title}</Card.Title>
                        <Card.Text className="information">
                          <FontAwesomeIcon color="#FFDF00" icon={faStar} /> 
                          <span className="d-inline ml-1"><b>Rating score:  </b>{this.props.location.movie.rt_score}</span><br/>
                          <span><b>Director: </b>{this.props.location.movie.director}</span><br/>
                          <span><b>Producer: </b>{this.props.location.movie.producer}</span><br/>
                          <span><b>Release date: </b>{this.props.location.movie.release_date}</span><br/>
                          <span><b>Description: </b>{this.props.location.movie.description}</span><br/>
                        </Card.Text>
                        
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg="1" md="1" sm="0" xs="0"></Col>
            </Row>
        </Container>       
      );
    } catch(err) {
      return (
      <Container className="detail-movie">
        <div className="arrow-back">
          <FontAwesomeIcon  onClick={this.handleClick} size="lg" icon={faArrowLeft} /> 
        </div>
          <h2 className="title-page">Filmography Detail</h2>
          <Row className="content-movie">
              <Col lg="3" md="3" sm="0" xs="0"></Col>
              <Col lg="9" md="9" sm="12" xs="12" >
                  <h1 className="error">Please choose a movie first</h1>
                  <h3 className="error">Error Message: {err.message}</h3>
              </Col>
              <Col lg="3" md="3" sm="0" xs="0"></Col>
        </Row>
    </Container>      
      )
    }
    
  }
}
 
export default withRouter(Filmography);