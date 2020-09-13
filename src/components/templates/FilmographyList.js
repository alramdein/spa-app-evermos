import React, { Component } from "react";

import { 
  Container,
  Row,
  Col,
} from "react-bootstrap";

import FilmCard from "../organisms/FilmCard/filmCard"
import moviePoster from "../../assets/no-img.png"

class Filmography extends Component {
  render() {
    let movieItems = []
    for(const movie of this.props.movies){
      movieItems.push(
        <Col key={movie.id} xs="12" sm="12" md="4" xl="4" className="card-list">
          <FilmCard movie={movie} moviePoster={moviePoster}/>
        </Col>
      )
    }
    return (
        <Container> 
          <div className="title-page">
            <h2>Filmography</h2>
            <p>Here it is the list of Ghibli Movies</p>
          </div>
            <Row>
                {movieItems}
            </Row>
        </Container>
    );
  }
}
 
export default Filmography;