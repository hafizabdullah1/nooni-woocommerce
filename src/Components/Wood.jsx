import React, { useRef, useEffect } from 'react';

const Wood = () => {
    const videoRef = useRef(null);
    
    useEffect(() => {
        const video = videoRef.current;
        video.play();
    }, []);

    return (
        <div className="vediomain">
            <video ref={videoRef} src='/img/video.mp4' loop muted>
                Your browser does not support the video tag or MP4 format.
            </video>
            <h1>WOOD</h1>
        </div>
    );
};

export default Wood;