import React from "react"
import { withRouter } from "react-router-dom";
// import "./style.scss"

import { 
    Card,
    Button,
} from "react-bootstrap";

import Sublabel from "../../molecules/Sublabel/sublabel"

const FilmCard = (props) => {
    const seeMovieDetail = (movie, poster) => {
        props.history.push({
            pathname: '/filmography/detail',
            movie: movie,
            moviePoster: poster
        })
    }
      
    return(
        <Card style={{color: "#1b1e31"}}>
          <Card.Img variant="top" src={props.moviePoster} />
             <Card.Body>
               <Card.Title>{props.movie.title}</Card.Title>
               <Card.Subtitle>
                    <Sublabel rating={props.movie.rt_score} release_date={props.movie.release_date} />
                </Card.Subtitle>
                <Card.Text className="cut-text">
                    {props.movie.description}
                </Card.Text>
                <Button variant="primary" onClick={() => seeMovieDetail(props.movie, props.moviePoster)}>See detail</Button>
            </Card.Body>
        </Card>   
    )
}

export default withRouter(FilmCard);