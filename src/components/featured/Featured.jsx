import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from 'react'
import "./featured.scss"

const Featured = ({type}) => {
    return (
        <div className= "featured">
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="action">Action</option>
                    <option value="adventure">Adventure</option>
                    <option value="animation">Animation</option>
                    <option value="crime">Crime</option>
                    <option value="documentry">Documentry</option>
                    <option value="drama">Drama</option>
                    <option value="romance">Romance</option>
                    <option value="sifi">Si-Fi</option>
                    <option value="thriller">Thriller</option>
                    
                </select>
            </div>

        )}
        <img src="https://images.pexels.com/photos/1182127/pexels-photo-1182127.jpeg?cs=srgb&dl=pexels-ba-phi-1182127.jpg&fm=jpg" alt="" />
         <div className="info">
             <img src="https://www.pngarts.com/files/9/Matrix-Logo-Transparent-Image.png" alt="" />
             <span className="desc">
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex iure impedit, ducimus, incidunt 
                 quisquam dicta est totam delectus architecto, vitae necessitatibus!
                 Laudantium molestias voluptates maxime?
             </span>
             <div className="buttons">
                 <button className="play">
                     <PlayArrow/>
                     <span>Play</span>
                 </button>
                 <button className="more">
                     <InfoOutlined/>
                     <span>Info</span>
                 </button>
             </div>
         </div>   
        </div>
    )
}

export default Featured
