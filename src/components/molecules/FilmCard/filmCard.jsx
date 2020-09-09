import React from "react"
import "./style.scss"

import Title from "../../atoms/Title/title"
import MoviePoster from "../../atoms/MoviePoster/moviePoster"
import Rating from "../../atoms/Rating/rating"
import Year from "../../atoms/Year/year"
import Description from "../../atoms/Description/description"
import Button from "../../atoms/Button/button"

const FilmCard = (props) => {
    return(
        <Card style={{color: "#1b1e31"}}>
            <MoviePoster />
            <Card.Body>
                <Title title={props.movie.title} />
                <Card.Subtitle>
                    <Rating rating={props.movie.rating} />
                    <Year year={props.movie.year} />
                </Card.Subtitle>
                <Description text={props.movie.description} />
                <Button buttonText="See Detail"/>
            </Card.Body>
        </Card>   
    )
}

export default FilmCard;