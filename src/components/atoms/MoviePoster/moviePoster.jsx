import React from "react"
import { Card } from "react-bootstrap";

const MoviePoster = (props) => {
    return(
        <Card.Img variant="top" src={props.img} />
    )
}

export default MoviePoster;