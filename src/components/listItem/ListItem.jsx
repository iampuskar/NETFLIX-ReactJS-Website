import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import "./listItem.scss"

const ListItem = ({index}) => {
    const [isHovered, setisHovered] = useState(false)
    const trailer = "https://vimeo.com/647644411";
    return (
        <div className="listItem" style={{left: isHovered && index *225 - 50 + index * 2.5}} 
        onMouseEnter={() => setisHovered(true)} 
        onMouseLeave={()=> setisHovered(false)}
        >
            <img src="https://gizmostory.com/wp-content/uploads/2019/12/SKOyqL1qFLIhbK6ho2lB.jpg" alt="" />
            {/* <ReactPlayer url="https://www.youtube.com/watch?v=L93hyPiltLA" /> */}
{isHovered && (
<>

            <video src= {trailer} autoPlay= {true} loop></video>
            
            <div className="itemInfo">
              <div className="icons">
                 <PlayArrow className="icon"/>
                 <Add className="icon"/>
                 <ThumbUpAltOutlined className="icon"/>
                 <ThumbDownAltOutlined className="icon"/>
              </div>
              <div className="itemInfoTop">
                  <span>1 hour 14 min</span>
                  <span className="limit">+16</span>
                  <span>2020</span>
                 </div>
                 <div className="desc">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus suscipit corrupti?
                 </div>
                  <div className="genre">Action</div>

            </div> 
            </>
            )} 
            
        </div>
    )
}

export default ListItem
