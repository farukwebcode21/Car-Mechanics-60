import React from 'react'
import { Link } from 'react-router-dom'
import notfouned from '../../images/404.png'

const NotFound = () => {
    return (
        <div>
            <img style={{ width: "100%" }} src={notfouned} alt="" />
            <Link to="/"><button>Go Back</button></Link>
        </div>
    )
}

export default NotFound
