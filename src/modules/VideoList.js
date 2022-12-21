import React from "react";
import '../cssFiles/videoList.css'

const VideoList = () => {

    let works = ["1yWdu77bHqc", "WnYiwOAkj-A", "99nwRVtmTAo", "VJ5pL1llkH0", 
                  "UTGU9dYHHrY", "xjhUZFw_fE4", "pmN1-VMvupw", "wplBC6c4gZI"];
                  
    
    return(   
        <div className="videoList-container">
            {
                works.map((work, i) => {
                    let currentWork = `https://www.youtube.com/embed/${work}`;

                    return <iframe width="560" height="315"
                    src={currentWork}
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                    gyroscope; picture-in-picture" allowfullscreen></iframe>
                })
            }
        </div>
        
    );
}

export default VideoList;