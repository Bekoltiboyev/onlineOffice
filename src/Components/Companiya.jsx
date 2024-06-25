import React from 'react';
import '../static/css/Companiya.css';
import ReactPlayer from 'react-player';
import videoFile from '../static/media/bugalter.mp4';


function Companiya() {
    return (
        <>
            <div className="container componiya mt-5 pb-3">
                <div className="kompaniya mb-5">
                    <ReactPlayer 
                        width="100%" 
                        height="100%" 
                        className="video_player" 
                        url={videoFile} 
                        controls 
                    />
                </div>
            </div>
        </>
    );
}

export default Companiya;
