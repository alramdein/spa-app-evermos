import React from "react"
import "./style.scss"

const Year = (props) => {
    return(
        <span className="year">({props.year})</span>   
    )
}

export default Year;