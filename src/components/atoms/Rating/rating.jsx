import React from "react"
import "./style.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Rating = (props) => {
    return(
        <div className="rating"> 
          <FontAwesomeIcon color="#FFDF00" icon={faStar} /> 
          <span className="rt_score">{props.rating}</span>
        </div>
    )
}

export default Rating;