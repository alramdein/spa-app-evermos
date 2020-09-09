import React from "react"
import { Card } from "react-bootstrap";

const Title = (props) => {
    return(
        <Card.Title>{props.title}</Card.Title>
    )
}

export default Title;