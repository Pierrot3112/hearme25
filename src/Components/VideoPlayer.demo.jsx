import React, { useRef, useState } from 'react';
import { IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

import video from '../assets/video/backHomee.mp4'

const VideoPlayer = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };
    return (
        <div style={{ position: "relative", display: "inline-block" }}>
            <video
                ref={videoRef}
                src={video}
                style={{ display: "block" }}
                controls={isPlaying}
            />
            <IconButton
                onClick={handlePlay}
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "#43A8FF",
                    color: "white",
                }}
            >
                <PlayArrowIcon fontSize='large' />
            </IconButton>
        </div>
    );
};

export default VideoPlayer;