import React from "react"
import "./style.scss"

import Rating from "../../atoms/Rating/rating"

const Sublabel = (props) => {
    return(
        <div className="sublabel"> 
           <Rating rating={props.rating} />
            <span className="year">({props.release_date})</span>
        </div> 
    )
}

export default Sublabel;