import React from "react"
import "./style.scss"

const Description = (props) => {
    return(
        <Card.Text className="cut-text">
            {props.text}
        </Card.Text>
    )
}

export default Description