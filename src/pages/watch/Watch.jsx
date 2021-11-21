import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react'
import "./watch.scss"

const Watch = () => {
    return (
        <div className="watch">
        <div className="back">
            <ArrowBackOutlined/>
            Home
        </div>
            <video className="video" autoPlay onProgress controls src="https://www.youtube.com/watch?v=w7ejDZ8SWv8"></video>
        </div>
    )
}

export default Watch
