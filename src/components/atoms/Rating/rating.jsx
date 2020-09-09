import React from "react"
import "./style.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Year = (props) => {
    return(
        <div className="rating"> 
          <FontAwesomeIcon color="#FFDF00" icon={faStar} /> 
          <span className="rating">{props.rating}</span>
        </div>
            
    )
}

export default Year;