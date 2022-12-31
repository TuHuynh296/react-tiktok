import React, { forwardRef, useContext, useImperativeHandle, useRef } from "react";
import video1 from '../assets/videos/clairo.mkv'

function Video(props, ref) {
    const videoRef = useRef();

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play();
        },
        pause() {
            videoRef.current.pause();
        }
    }))

    return (
        <>
            <video
                ref={videoRef}
                style={{ width: 300 }}
                src={video1}>
            </video>
        </>
    )
}

const VideoComponentForwardRef = forwardRef(Video);

function UseImperativeHandle() {
    const videoComponentRef = useRef();
    const handlePlay = () => {
        videoComponentRef.current.play();
    };

    const handlePause = () => {
        videoComponentRef.current.pause();
    }; 

    return (
        <div style={{ padding: 32 }}>
            <VideoComponentForwardRef ref={videoComponentRef}/>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </div>
    )
}


export default UseImperativeHandle;